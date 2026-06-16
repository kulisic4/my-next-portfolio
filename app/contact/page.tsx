import React from "react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="font-sans bg-white text-black min-h-screen">

      <section className="min-h-screen flex items-start justify-center px-6 pt-16 pb-16">
        <div className="w-full max-w-5xl">
          <ContactForm />
        </div>
      </section>

    </div>
  );
};

export default Contact;