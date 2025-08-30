import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", emailValue);
    console.log("Message:", messageValue);
    const currentTime = new Date().toLocaleString(); // for {{time}}

    emailjs
      .send(
        "service_hlktnvp", // Your Service ID
        "template_chje29v", // Replace with your Template ID
        {
          name: emailValue, // maps to {{name}}
          message: messageValue, // maps to {{message}}
          time: currentTime, // maps to {{time}}
        },
        "DgkHQOe9cvL6hpS6E" // Your Public Key
      )
      .then(
        () => {
          alert("Email sent successfully!");
          setEmailValue("");
          setMessageValue("");
        },
        (error) => {
          alert("Failed to send email. Error: " + error.text);
        }
      );
  };

  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="font-bold text-3xl mt-5">Get In Touch</h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md mt-6"
      >
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            className="p-2 rounded bg-gray-200 text-black w-full focus:outline-none focus:ring-0"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            placeholder="Enter your message"
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="p-2 rounded bg-gray-200 text-black w-full h-28 resize-none focus:outline-none focus:ring-0"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition"
        >
          Send <FaTelegramPlane />
        </button>
      </form>
    </div>
  );
};

export default Contact;
