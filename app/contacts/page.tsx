"use client";
import React, { useState } from "react";

export default function ContactsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!message) {
      newErrors.message = "Message is required";
    } else if (message.length < 20) {
      newErrors.message = "Message should be at least 20 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission logic here
      console.log("Form submitted");
    }
  };

  return (
    <div className="flex justify-center mt-20 max-h-[100svh]">
      <form
        className="bg-[#1C1C1E] mx-4 p-6 md:p-20 rounded-3xl shadow-md w-full max-w-3xl h-fit animate-fade-in"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`shadow bg-neutral-700  appearance-none border rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:border-4 focus:border-sky-600 transition-all duration-100 ${errors.name ? "border-red-500" : ""}`}
            placeholder="e.g. John Doe"
          />
          {errors.name && (
            <p className="text-red-500 text-md italic">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`shadow bg-neutral-700  appearance-none border rounded-xl w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:border-4 focus:border-sky-600 transition-all duration-100 ${errors.email ? "border-red-500" : ""}`}
            placeholder="example@gmail.com"
          />
          {errors.email && (
            <p className="text-red-500 text-md italic ">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Issue, Questions or Suggestions
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`shadow bg-neutral-700 appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-4 focus:border-sky-600 transition-all duration-100 ${errors.message ? "border-red-500" : ""}`}
            placeholder="Your message to our team"
            rows={5}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-md italic">{errors.message}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
