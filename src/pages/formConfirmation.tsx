import { FormSubmission } from "@prisma/client";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import superjson from "superjson";
import { appRouter } from "~/server/api/root";
import { createInnerTRPCContext } from "~/server/api/trpc";
import { LocalizedText } from "~/types";

const Confirmation = ({ formData }: { formData: FormSubmission }) => {
  const { locale } = useRouter();

  const confirmationData: {
    [key: string]: LocalizedText[];
  } = {
    title: [
      {
        locale: "es-MX",
        text: `¡Gracias por contactarnos ${formData.name}!`,
      },
      {
        locale: "en-US",
        text: `Thank you for your submission ${formData.name}!`,
      },
    ],
    body: [
      {
        locale: "es-MX",
        text: "Nos pondremos en contacto contigo lo antes posible.",
      },
      {
        locale: "en-US",
        text: "We will get back to you as soon as possible.",
      },
    ],
  };

  const title =
    confirmationData.title?.find((t) => t.locale === locale)?.text || "";
  const body =
    confirmationData.body?.find((t) => t.locale === locale)?.text || "";

  return (
    <div className="mx-4 flex h-screen flex-col items-center justify-center gap-4 text-center text-slate-800 dark:text-slate-100">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl">{body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const submission = ctx.query?.i as string;
  if (!submission) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
    return { props: {} };
  }
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({ session: null }),
    transformer: superjson,
  });

  const formData: FormSubmission = (await helpers.formSubmission.getById.fetch(
    submission
  )) as any;

  return {
    props: {
      formData: JSON.parse(JSON.stringify(formData)),
    },
  };
};

export default Confirmation;
