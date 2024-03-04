import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { FormData } from "@/components/ContactForm";

export async function sendEmail(data: FormData) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${data.name} (${data.email})`,
    text: data.message,
  };

  try {
    await transport.sendMail(mailOptions);
    console.log("Email sent successfully");
    return { success: true };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, error: err };
  }
}
