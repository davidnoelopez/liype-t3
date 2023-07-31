import { useRouter } from "next/router";
import { DefaultData } from "~/types";
import Link from "next/link";
import { Variants, motion } from "framer-motion";

interface Props {
  defaultData: DefaultData;
}

export default function Hero({ defaultData }: Props) {
  const { locale } = useRouter();
  const brandName = defaultData.brandName.filter((t) => t.locale === locale)[0]
    ?.text;
  const title = defaultData.titles.filter((t) => t.locale === locale)[0]?.text;
  const serviceDescription = defaultData.serviceDescription.filter(
    (t) => t.locale === locale
  )[0]?.text;
  const callToAction = defaultData.callToAction.filter(
    (t) => t.locale === locale
  )[0]?.text;

  const introHeaderVariants: Variants = {
    hide: {
      opacity: 0,
      y: -200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0,
        type: "spring",
        duration: 1,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      className="mx-auto max-w-2xl px-8 py-32 pb-24 sm:py-48 md:py-48 md:pb-36"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={introHeaderVariants}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-6xl">
          {brandName}
        </h1>
        <div className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
          {title}
        </div>
        <p className="mt-6 text-base leading-8 text-gray-600 dark:text-gray-500 sm:text-lg">
          {serviceDescription}
        </p>
        {/* <div className="mx-auto my-8 w-3/4 border-b border-gray-400/30 dark:border-gray-700" /> */}
        <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:px-24">
          <p className="text-xl font-bold leading-8 text-black dark:text-white">
            {callToAction}
          </p>
          <Link
            href="/contact"
            className="text-md w-fit rounded-md bg-blue-800 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {
              defaultData.contactButtonText.filter(
                (t) => t.locale === locale
              )[0]?.text
            }
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
