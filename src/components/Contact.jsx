import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Form validation function
  const validateForm = () => {
    if (!name || !email || !subject || !message) {
      toast.error("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/data`,
        { name, email, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-col bg-gradient-to-b from-black to-slate-600 gap-4 p-10 m-10"
      name="contact"
      aria-label="Contact form"
    >
      <h2 className="text-white text-center font-bold text-3xl mt-5 mb-7">
        Contact Us
      </h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-black text-white p-5"
        aria-label="Name"
        required
      />
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-black text-white p-5"
        aria-label="Email"
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="bg-black text-white p-5"
        aria-label="Subject"
        required
      />
      <textarea
        rows={10}
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-black text-white p-5 h-16"
        aria-label="Message"
        required
      />
      <button
        type="submit"
        className={`p-3 bg-gradient-to-r from-cyan-500 to-blue-700 text-white font-bold ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default Contact;
