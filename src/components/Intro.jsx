import  kian from "../assets/kian.png";
import { PiSuitcaseFill } from "react-icons/pi";

function Intro() {
  return (
    <div>
      <section className="flex w-full justify-between object-cover">
        <div className="p-4 mt-60 z-10 relative">
            <span className="text-slate-100 text-3xl">Hello</span><br/><br/>
            <span className="text-slate-100 text-6xl font-bold">I'm <span className="text-yellow-400 text-6xl font-bold">Kian</span></span><br/><br/>
            <span className="text-slate-100 text-6xl font-bold">Web Developer</span><br/><br/>
            <span className="text-slate-100 text-3xl">I'm a skilled and passionate web developer in JavaScript, React, HTML, CSS and TailwindCSS to create responsive and user-friendly websites.</span><br/><br/>
            <button className="border p-2 px-4 rounded-xl bg-slate-300 text-slate-800 font-bold flex justify-center items-center gap-3 text-xl hover:text-yellow-400 hover:bg-slate-600"><PiSuitcaseFill className="text-3xl"/>Hire Me</button>
        </div>
        <img src={kian} alt="profile" className=" right-0 p-4 ml-4 w-[500px] "/>
      </section>
    </div>
  );
}

export default Intro;
