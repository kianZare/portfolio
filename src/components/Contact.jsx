import linkedin from "../assets/link/linkedin.png";
import github from "../assets/link/github.png";
import phone from "../assets/link/phone.png";
import email from "../assets/link/gmail.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9zm37c6",
        "template_ijcn7gp",
        form.current,
        "1Zv_yt8YnOgAe_qQ7"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Thanks! You sent your email successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="flex w-full max-w-6xl justify-center items-center "
    >
      <section className="flex flex-col justify-center items-center w-full max-w-3xl p-4">
        <h1 className='flex justify-center text-6xl font-bold mb-4 "'>
          Contact Me
        </h1>
        <span className="flex justify-center items-center p-2 text-xl ">
          Please fill out the form below to discuss any work opportunites
        </span>

        <form
          className="flex flex-col w-[90vw] max-w-2xl text-lg"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Your Name"
            name="your_name"
            className="border h-10 px-4 py-7 bg-slate-700 m-1 rounded-lg"
          />
          <input
            type="text"
            placeholder="Your Email"
            name="your_email"
            className="border h-10 px-4 py-7 bg-slate-700 m-1 rounded-lg"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="p-4 bg-slate-700 m-1 rounded-lg"
          ></textarea>
          <div className="flex justify-center m-2">
            <button
              type="submit"
              value="send"
              className="w-44 bg-white border-none text-slate-900 text-xl font-bold p-4 rounded-lg box-border hover:bg-yellow-500"
            >
              {" "}
              Submit
            </button>
          </div>
          <div className="flex justify-center items-center p-4 mt-8">
            <a href="http://linkedin.com/in/kian-zareinajad">
              <img
                className="flex w-16 md:w-24 m-2 hover:scale-110"
                src={linkedin}
                alt="linkedin"
              />
            </a>
            <a href="https://github.com/kianZare">
              <img
                className="flex w-16 md:w-24 m-2 hover:scale-110"
                src={github}
                alt="github"
              />
            </a>
            <a href="mailto:kianzareinejad@gmail.com">
              <img
                className="flex w-16 md:w-24 m-2 hover:scale-110"
                src={email}
                alt="email"
              />
            </a>
            <a href="tel:+447508001908">
              <img
                className="flex w-[71px] md:w-[107px] m-1 hover:scale-110"
                src={phone}
                alt="phone"
              />
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
