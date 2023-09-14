import { Link } from "react-scroll";
import { GrContact } from "react-icons/gr";

function Navbar() {
  return (
    <nav className="flex h-16  items-center justify-between px-2 md:px-4 max-w-7xl">
      <h1 className="text-xl md:text-3xl flex text-yellow-400 font-bold">
        KIAN
        <p className="w-1 h-1 md:w-2 md:h-2 ml-1 border mt-6 rounded-full bg-yellow-400 "></p>
      </h1>
      <div className="flex md:text-xl text-slate-100 md:gap-2 cursor-pointer">
        <Link className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-xl hover:font-bold">Home</Link>
        <Link className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-xl hover:font-bold">About</Link>
        <Link className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-xl hover:font-bold">Portfolio</Link>
        <Link className="hover:text-yellow-400 hover:bg-slate-600 p-2 rounded-xl hover:font-bold">Client</Link>
      </div>
      <button className="flex text-slate-600 bg-slate-100 md:text-xl border rounded-2xl m-2 p-2 border-slate-400 gap-1 md:gap-2 justify-center items-center">
        <GrContact />
        <p>Contact Me</p>
      </button>
    </nav>
  );
}

export default Navbar;
