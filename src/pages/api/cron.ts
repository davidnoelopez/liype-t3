import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { env } from "~/env.mjs";
import Email from "~/server/emails";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const resend = new Resend(env.RESEND_API_KEY);

  resend
    .sendEmail({
      from: "Nuevo Registro <no-reply@nogiistudio.com>",
      to: ["david@nogiistudio.com"],
      subject: "Prueba de cron",
      react: Email(),
    })
    .then((response) => {
      console.log(response);
      res.status(200).end("Cron LIYPE!");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).end("Error en el cron");
    });
}