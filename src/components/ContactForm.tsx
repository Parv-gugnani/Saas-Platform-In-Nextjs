"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";

import { sendEmail } from "@/lib/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      await sendEmail(data);
      setSuccessMessage("Email sent successfully!");
      reset(); // Reset the form after successful submission
    } catch (error) {
      setErrorMessage("Error sending email. Please try again later.");
      console.error("Error sending email:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("message", { required: true })}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={submitting}
          className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
      {successMessage && (
        <p className="text-green-600 mt-3">{successMessage}</p>
      )}
      {errorMessage && <p className="text-red-600 mt-3">{errorMessage}</p>}
    </form>
  );
};

export default ContactForm;
