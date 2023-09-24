import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {contacts} from "../data/Data"


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
          alert("Thanks! You sent your text successfully!");
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
        <span className="flex ml-2 justify-center items-center p-2 text-xl ">
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
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="your_email"
            className="border h-10 px-4 py-7 bg-slate-700 m-1 rounded-lg"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="p-4 bg-slate-700 m-1 rounded-lg"
            required
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
        </form>
        <div className="flex justify-center items-center mt-6">
          {contacts.map((item) => (
            <>
              <a href={item.URL} key={item.id}>
                <img
                  className="flex w-16 md:w-24 m-2 hover:scale-110"
                  src={item.imageUrl}
                  alt={item.name}
                />
              </a>
            </>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
