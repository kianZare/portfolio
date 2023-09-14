import  kian from "../assets/kian.png";
import { PiSuitcaseFill } from "react-icons/pi";

function Intro() {
  return (
    <div className="flex w-full max-w-6xl">
      <section className="relative flex w-full max-w-6xl justify-between object-cover">
        <div className="p-4 mt-20 md:mt-40 z-10 relative">
            <span className="text-blue-700 md:text-slate-100 text-lg md:text-3xl">Hello</span><br/><br/>
            <span className="text-blue-700 md:text-slate-100 text-4xl md:text-6xl font-bold">I'm <span className="text-yellow-400 text-4xl md:text-6xl font-bold">Kian</span></span><br/><br/>
            <span className="text-blue-700 md:text-slate-100 text-4xl md:text-6xl font-bold">Web Developer</span><br/><br/>
            <span className="text-blue-700 md:text-slate-100 text-lg md:text-3xl">I'm a skilled and passionate web developer in JavaScript, React, HTML, CSS and TailwindCSS to create responsive and user-friendly websites.</span><br/><br/>
            <button className="border p-2 px-4 rounded-xl bg-slate-300 text-slate-800 font-bold flex justify-center items-center gap-3 text-xl hover:text-yellow-400 hover:bg-slate-600"><PiSuitcaseFill className="text-3xl"/>Hire Me</button>
        </div>
        <img src={kian} alt="profile" className=" z-0 absolute right-0 p-4 ml-4 w-[500px] object-cover "/>
      </section>
    </div>
  );
}

export default Intro;
