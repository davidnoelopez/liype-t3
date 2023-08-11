import { FormSubmission } from "@prisma/client";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import TextArea from "~/components/Forms/TextArea";
import TextField from "~/components/Forms/TextField";
import { api } from "~/utils/api";
import { ContactInfo, contactData } from "~/utils/assets/contactData";

export type FormSubmissionInput = Omit<
  FormSubmission,
  "id" | "createdAt" | "updatedAt"
>;

const Contact = () => {
  const { locale } = useRouter();
  const router = useRouter();

  const [formSubmissionData, setFormSubmissionData] =
    useState<FormSubmissionInput>({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      city: "",
      state: "",
      message: "",
    });
  const { mutate: createFormSubmission, isLoading } =
    api.formSubmission.create.useMutation({
      onSuccess: (data) => {
        router.push(
          "/formConfirmation?name=" + data.name + "&email=" + data.email
        );
      },
      onError: () => {
        toast.error(
          locale === "es-MX"
            ? "Hubo un error al enviar el formulario"
            : "There was an error sending the form"
        );
      },
    });

  const [formErrorValidation, setFormErrorValidation] = useState({
    name: false,
    email: false,
    city: false,
    state: false,
    message: false,
  });

  const errorMessages = [
    {
      locale: "es-MX",
      text: "Este campo es requerido",
    },
    {
      locale: "en-US",
      text: "This field is required",
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate Data:
    const validation = {
      name: formSubmissionData.name?.length === 0,
      email: formSubmissionData.email?.length === 0,
      city: formSubmissionData.city?.length === 0,
      state: formSubmissionData.state?.length === 0,
      message: formSubmissionData.message?.length === 0,
    };

    setFormErrorValidation(validation);

    if (Object.values(validation).every((value) => value)) {
      toast.error(
        locale === "es-MX"
          ? "Por favor llena todos los campos requeridos"
          : "Please fill all required fields"
      );
      return;
    }

    createFormSubmission({
      name: formSubmissionData.name!,
      email: formSubmissionData.email!,
      phone: formSubmissionData.phone!,
      company: formSubmissionData.company!,
      role: formSubmissionData.role!,
      city: formSubmissionData.city!,
      state: formSubmissionData.state!,
      message: formSubmissionData.message!,
    });
  };

  return (
    <section className="h-max pt-20 md:px-8">
      <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
        <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {ContactInfo.title.filter((item) => item.locale === locale)[0]?.text}
        </h2>
        <p className="mb-8 text-center font-normal text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
          {
            ContactInfo.description.filter((item) => item.locale === locale)[0]
              ?.text
          }
        </p>
        <form
          action="#"
          className="space-y-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            <TextField
              name="name"
              type="text"
              label={
                ContactInfo.formName.filter((item) => item.locale === locale)[0]
                  ?.text
              }
              placeholder={
                ContactInfo.formNamePlaceholder.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
              value={formSubmissionData.name || ""}
              onChange={(value) =>
                setFormSubmissionData({ ...formSubmissionData, name: value })
              }
              validationState={formErrorValidation.name ? "invalid" : "valid"}
              errorMessage={
                errorMessages.filter((item) => item.locale === locale)[0]?.text
              }
              isRequired
              minLength={0}
              maxLength={50}
            />
            <TextField
              name="email"
              type="email"
              label={
                ContactInfo.formEmail.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
              placeholder="company@mail.com"
              value={formSubmissionData.email || ""}
              onChange={(value) =>
                setFormSubmissionData({ ...formSubmissionData, email: value })
              }
              validationState={formErrorValidation.email ? "invalid" : "valid"}
              errorMessage={
                errorMessages.filter((item) => item.locale === locale)[0]?.text
              }
              isRequired
              minLength={0}
              maxLength={50}
            />
            <TextField
              name="phone"
              type="tel"
              label={
                ContactInfo.formPhone.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
              placeholder="+52 8112345678"
              value={formSubmissionData.phone || ""}
              onChange={(value) =>
                setFormSubmissionData({ ...formSubmissionData, phone: value })
              }
              minLength={0}
              maxLength={50}
            />
            <TextField
              name="company"
              type="text"
              label={
                ContactInfo.formCompany.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
              placeholder={
                ContactInfo.formCompanyPlaceholder.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
              value={formSubmissionData.company || ""}
              onChange={(value) =>
                setFormSubmissionData({ ...formSubmissionData, company: value })
              }
              minLength={0}
              maxLength={50}
            />
            <TextField
              name="role"
              type="text"
              label={
                ContactInfo.formRole.filter((item) => item.locale === locale)[0]
                  ?.text
              }
              placeholder={
                ContactInfo.formRolePlaceholder.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
              value={formSubmissionData.role || ""}
              onChange={(value) =>
                setFormSubmissionData({ ...formSubmissionData, role: value })
              }
              minLength={0}
              maxLength={50}
            />
            <TextField
              name="city"
              type="text"
              label={
                ContactInfo.formCity.filter((item) => item.locale === locale)[0]
                  ?.text
              }
              placeholder="Monterrey"
              value={formSubmissionData.city || ""}
              onChange={(value) =>
                setFormSubmissionData({ ...formSubmissionData, city: value })
              }
              validationState={formErrorValidation.city ? "invalid" : "valid"}
              errorMessage={
                errorMessages.filter((item) => item.locale === locale)[0]?.text
              }
              isRequired
              minLength={0}
              maxLength={50}
            />
            <TextField
              name="state"
              type="text"
              label={
                ContactInfo.formState.filter(
                  (item) => item.locale === locale
                )[0]?.text
              }
              placeholder="Nuevo León"
              value={formSubmissionData.state || ""}
              onChange={(value) =>
                setFormSubmissionData({ ...formSubmissionData, state: value })
              }
              validationState={formErrorValidation.state ? "invalid" : "valid"}
              errorMessage={
                errorMessages.filter((item) => item.locale === locale)[0]?.text
              }
              isRequired
              minLength={0}
              maxLength={50}
            />
          </div>
          <TextArea
            name="message"
            type="text"
            rows={5}
            label={
              ContactInfo.formMessage.filter(
                (item) => item.locale === locale
              )[0]?.text
            }
            placeholder={
              ContactInfo.formMessagePlaceholder.filter(
                (item) => item.locale === locale
              )[0]?.text
            }
            value={formSubmissionData.message || ""}
            onChange={(value) =>
              setFormSubmissionData({ ...formSubmissionData, message: value })
            }
            validationState={formErrorValidation.message ? "invalid" : "valid"}
            errorMessage={
              errorMessages.filter((item) => item.locale === locale)[0]?.text
            }
            isRequired
            minLength={0}
            maxLength={500}
          />
          <button
            type="submit"
            className="rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit"
            disabled={isLoading}
          >
            {
              ContactInfo.sendMessageButton.filter(
                (item) => item.locale === locale
              )[0]?.text
            }
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
