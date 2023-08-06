import { useRouter } from "next/router";

const FormConfirmation = () => {
  const router = useRouter();
  // user query params to get name and email
  const { name, email } = router.query;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        {`¡Gracias por contactarnos${name ? " " + name : ""}!`}
      </h1>
      <p className="mt-4 text-lg text-gray-900 dark:text-gray-100">
        Nos pondremos en contacto contigo lo antes posible.
      </p>
    </div>
  );
};

export default FormConfirmation;
