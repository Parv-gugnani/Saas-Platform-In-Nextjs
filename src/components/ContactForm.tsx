// "service_xc3nlhp", "template_tvo19w3", "#contact-form", "z5R67PY6AZ6eSaGI5"; // Pass the user ID here
"use client";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactform.css";

export default function ContactForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null); // Reference for the message input field
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("z5R67PY6AZ6eSaGI5");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = "service_xc3nlhp";
    const templateId = "template_tvo19w3";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: nameRef.current?.value,
        recipient: emailRef.current?.value,
        message: messageRef.current?.value, // Include the message in the email data
      });
      alert("Email successfully sent. Check your inbox.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <aside></aside>
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            ref={nameRef}
            id="name"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          {/* New form group for the message */}
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            ref={messageRef}
            id="message"
            placeholder="Enter your message"
            className="w-full p-2 border rounded-md"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}{" "}
          {/* Change button text based on loading state */}
        </button>
      </form>
    </section>
  );
}

//   return (
//     <section>
//       <aside></aside>
//       <form className="for" onSubmit={handleSubmit}>
//         <div className="form_group">
//           <label htmlFor="">Name</label>
//           <input ref={nameRef} placeholder="Enter your name" />
//         </div>
//         <div className="form_group">
//           <label htmlFor="">Email</label>
//           <input ref={emailRef} type="email" placeholder="Enter your email" />
//         </div>
//         <div className="form_group">
//           {" "}
//           {/* New form group for the message */}
//           <label htmlFor="">Message</label>
//           <textarea
//             ref={messageRef}
//             placeholder="Enter your message"
//           ></textarea>
//         </div>
//         <button className="btn" disabled={loading}>
//           {loading ? "Sending..." : "Send"}{" "}
//           {/* Change button text based on loading state */}
//         </button>
//       </form>
//     </section>
//   );
// }
