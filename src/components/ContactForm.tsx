// "service_xc3nlhp", "template_tvo19w3", "#contact-form", "z5R67PY6AZ6eSaGI5"; // Pass the user ID here
"use client";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "./ui/use-toast"; // Added import for useToast
import { Button } from "./ui/button"; // Added import for Button
import "./contactform.css";

export default function ContactForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast(); // Destructuring toast function from useToast

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
        message: messageRef.current?.value,
      });
      toast({
        title: "Your Response has been sent",
        description: "Thanks for your Time!",
        duration: 5000,
      });
      // Reset the form fields after successful submission
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Failed to send your response. Please try again later.",
        duration: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm font-semibold">
            Name
          </label>
          <input
            ref={nameRef}
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-semibold">
            Email
          </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-sm font-semibold">
            Message
          </label>
          <textarea
            ref={messageRef}
            id="message"
            placeholder="Enter your message"
            className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-purple-500"
            rows={4}
          ></textarea>
        </div>
        <Button // Replaced HTML button with custom Button component
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}
