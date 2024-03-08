import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { WavyBackground } from "@/components/ui/wavy-background";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <header className="py-8 bg-blue-600 text-white text-center relative">
        <h1 className="text-3xl font-bold relative z-10">Contact Us</h1>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-lg mx-auto">
          <ContactForm />
        </div>
      </main>
      {/* TODO: */}
      <h1 className="py-8 px-8">Add a slider something or socials</h1>
    </div>
  );
};

export default ContactPage;
