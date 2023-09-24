import { Link } from "react-scroll";
import { GrContact } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


function Navbar() {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <nav className="flex bg-zinc-950 h-16 items-center justify-between px-4 md:px-4 w-full max-w-6xl min-w-[320px] sticky top-0 z-30">
      <h1 className="text-xl md:text-4xl flex text-yellow-400 font-bold">
        KIAN
      </h1>
      <div className="hidden md:block">
        <div className=" flex md:text-xl text-slate-100 md:gap-2 cursor-pointer">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-lg hover:font-bold"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-lg hover:font-bold"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-lg hover:font-bold"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-lg hover:font-bold"
          >
            Client
          </Link>
        </div>
      </div>
      <span className="hidden md:block">
        <button
          className="flex text-slate-600 bg-slate-100 md:text-xl border rounded-2xl m-2 p-2 border-slate-400 gap-1 md:gap-2 justify-center items-center"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <GrContact />
          <p className="hidden md:block">Contact Me</p>
        </button>
      </span>
      <div className="md:hidden flex md:text-xl text-slate-100 md:gap-2 cursor-pointer">
        <GiHamburgerMenu className="text-yellow-500 text-2xl" onClick={()=>setShowMenu(!showMenu)}/>
        <div className="absolute top-12 right-1 w-32 flex-col p-2 h-fit bg-slate-700 rounded-xl " style={{display:showMenu? 'flex' : 'none'}}>
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className="bg-slate-900 m-1 hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-lg hover:font-bold"
            onClick={()=>setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className="bg-slate-900 m-1 hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-lg hover:font-bold"
            onClick={()=>setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className="bg-slate-900 m-1 hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-lg hover:font-bold"
            onClick={()=>setShowMenu(false)}
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className="bg-slate-900 m-1 hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-lg hover:font-bold"
            onClick={()=>setShowMenu(false)}
          >
            Client
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className="bg-slate-900 m-1 hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-lg hover:font-bold"
            onClick={()=>setShowMenu(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
