import kian from "../assets/kian.png";
import { PiSuitcaseFill } from "react-icons/pi";

function Intro() {
  return (
    <div
      id="intro"
      className="flex w-full max-w-6xl mt-2 mb-20 md:mb-60 lg:mb-10 h-[calc(100vh-64px)]"
    >
      <section className="relative flex w-full max-w-6xl justify-between object-cover">
        <div className="flex flex-col justify-center p-4 z-10 ">
          <span className="text-blue-800 md:text-slate-100 text-2xl md:text-3xl">
            Hello
          </span>
          <br />
          <br />
          <span className="text-blue-800 md:text-slate-100 text-5xl md:text-6xl font-bold">
            I&apos;m
            <span className="text-yellow-400 text-5xl md:text-6xl font-bold">
              Kian
            </span>
          </span>
          <br />
          <br />
          <span className="text-blue-800 animate-type-1 md:text-slate-100 text-5xl md:text-6xl font-bold">
            Web Developer
          </span>
          <br />
          <br />
          <span className="text-blue-800 md:text-slate-100 text-2xl font-semibold md:text-3xl">
            I&apos;m a skilled and passionate web developer utilizing JavaScript,
            React, HTML, CSS and TailwindCSS to create responsive and
            user-friendly websites.
          </span>
          <br />
          <br />
          <button
            className="border sm:max-w-[240px] mb-10 p-2 px-4 rounded-xl bg-slate-300 text-slate-800 font-bold flex justify-center items-center gap-3 text-xl hover:text-yellow-400 hover:bg-slate-600"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <PiSuitcaseFill className="text-3xl" />
            Hire Me
          </button>
        </div>
        <img
          src={kian}
          alt="profile"
          className="absolute md:block  right-0 mt-4 md:p-4 ml-4 w-[410px] object-fit z-0 "
        />
      </section>
    </div>
  );
}

export default Intro;
