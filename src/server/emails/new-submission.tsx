import { FormSubmission } from "@prisma/client";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import { Markdown } from "@react-email/markdown";
import * as React from "react";
import { env } from "~/env.mjs";

interface NewSubmissionProps {
  formSubmission: FormSubmission;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : env.NEXTAUTH_URL;

export const NewSubmissionEmail = ({
  formSubmission = {
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "John Doe",
    email: "john@doe.com",
    phone: "1234567890",
    company: "Acme Inc.",
    role: "CEO",
    city: "New York",
    state: "NY",
    message: "Hello world",
  },
}: NewSubmissionProps) => {
  const recordLink = `${baseUrl}/dashboard/submissions/${formSubmission.id}`;

  return (
    <Html>
      <Head />
      <Preview>Nuevo registro de contacto</Preview>
      <Tailwind>
        <Body className="bg-gray-300 px-2 py-3">
          <Container className="rounded-lg border border-gray-200 bg-white p-12">
            <Img
              src={`${baseUrl}/assets/logoLIYPE_dark.png`}
              width="150"
              height="44"
              alt="LIYPE"
            />
            <Section className="py-2 font-sans">
              <Text className="text-base font-light text-gray-900">Hola,</Text>
              <Text className="text-base font-light text-gray-900">
                Se a registrado un nuevo cliente en la pagina, detalles:
              </Text>
              <Text className="text-base font-light text-gray-900">
                Información del cliente:
              </Text>
              <Markdown
                markdownCustomStyles={{
                  li: { color: "gray" },
                }}
              >
                {`
                - Nombre: ${formSubmission.name}
                - Email: ${formSubmission.email}
                - Teléfono: ${formSubmission.phone}
                - Empresa: ${formSubmission.company}
                - Rol: ${formSubmission.role}
                - Ciudad: ${formSubmission.city}
                - Estado: ${formSubmission.state}
                - Mensaje: ${formSubmission.message}
                `}
              </Markdown>
              <Button
                className="rounded-md bg-sky-800 p-4 font-sans font-semibold text-white "
                href={recordLink}
              >
                Ver Registro
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewSubmissionEmail;

const anchor = {
  textDecoration: "underline",
};
