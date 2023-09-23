import rick from "../assets/projects/Rick&morty.png";
import shopping from "../assets/projects/shopping.png";
import noteapp from "../assets/projects/noteapp.png";
import digitiz from "../assets/projects/digitiz.png";
import cats from "../assets/projects/cats4life.png";
import searchphotos from "../assets/projects/searchphoto.png";
import clock from "../assets/projects/clock.png";
import calculator from "../assets/projects/calculator.png";

// const projects = {
//   1: {
//     id: 1,
//     name: "kian",
//     about: "",
//     languages: "",
//     URL: "",
//     image:"",
//   },
// };

function Projects() {
  return (
    <div id="projects" className="flex max-w-6xl justify-center items-center ">
      <section className="p-4 mb-16 justify-center items-center">
        <h1 className="flex justify-center text-6xl font-bold p-8">
          My Projects
        </h1>
        <span className="flex justify-center text-xl md:text-2xl p-6">
          In my portfolio, I am thrilled to showcase my expertise in web
          development, particularly in JavaScript, React, HTML, CSS, and
          TailwindCSS. As a meticulous and dedicated developer, I take pride in
          ensuring that every aspect of my work is pixel perfect and visually
          appealing. I am committed to delivering exceptional results that cater
          to the needs of clients and users alike. With my skills and
          experience, I am passionate about helping businesses achieve their
          goals and establish a strong online presence. I am excited to
          collaborate with clients to create responsive and user-friendly
          websites that exceed expectations. Let's work together to bring your
          vision to life!
        </span>
        {/* Projects */}
        <div>
          <div className="flex justify-center max-w-6xl relative">
            <div className="flex justify-center border rounded-2xl mt-12 gap-4 overflow-hidden">
              <a href="https://kian-rick-and-morty.netlify.app/">
                <img
                  src={rick}
                  alt="rick"
                  className="w-96 md:h-60 object-cover cursor-pointer"
                />
              </a>
              <div className="hidden md:block flex-col justify-between p-4">
                <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                  Rick and Morty
                </h2>
                <p className="text-lg ">
                  A responsive web site using React.js , API
                </p>
                <div className="md:absolute bottom-4 text-blue-500">
                  <a href="https://kian-rick-and-morty.netlify.app/">
                    URL: https://kian-rick-and-morty.netlify.app/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center max-w-6xl relative">
            <div className="flex justify-center border rounded-2xl mt-12 gap-4 overflow-hidden">
              <a href="https://kianzare.github.io/ShoppingCart/">
                <img
                  src={shopping}
                  alt="shopping"
                  className="w-96 md:h-60 object-cover cursor-pointer"
                />
              </a>
              <div className="hidden md:block flex-col justify-between p-4">
                <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                  Shopping Site
                </h2>
                <p className="text-lg">
                  A responsive web site using JavaScript
                </p>
                <div className="md:absolute bottom-4 text-blue-500">
                  <a href="https://kianzare.github.io/ShoppingCart/">
                    URL: https://kianzare.github.io/ShoppingCart/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center max-w-6xl relative">
            <div className="flex justify-center border rounded-2xl mt-12 gap-4 overflow-hidden">
              <a href="https://kianzare.github.io/notesAPP/">
                <img
                  src={noteapp}
                  alt="noteapp"
                  className="w-96 md:h-60 object-cover cursor-pointer"
                />
              </a>
              <div className="hidden md:block flex-col justify-between p-4">
                <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                  Note App
                </h2>
                <p className="text-lg">
                  A responsive Note App using JavaScript
                </p>
                <div className="md:absolute bottom-4 text-blue-500">
                  <a href="https://kianzare.github.io/notesAPP/">
                    URL: https://kianzare.github.io/notesAPP/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center max-w-6xl relative">
            <div className="flex justify-center border rounded-2xl mt-12 gap-4 overflow-hidden">
              <a href="https://kianzare.github.io/Digitize-Shop/public/watch.html">
                <img
                  src={digitiz}
                  alt="digitiz"
                  className="w-96 md:h-60 object-cover cursor-pointer"
                />
              </a>
              <div className="hidden md:block flex-col justify-between p-4">
                <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                  DigiTize
                </h2>
                <p className="text-lg">
                  A responsive web site using React.js , API
                </p>
                <div className="md:absolute bottom-4 text-blue-500">
                  <a href="https://kianzare.github.io/Digitize-Shop/public/watch.html">
                    URL: https://kianzare.github.io/Digitize-Shop/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center max-w-6xl relative">
            <div className="flex justify-center border rounded-2xl mt-12 gap-4 overflow-hidden">
              <a href="https://catshopping.netlify.app/Cart">
              <img
                src={cats}
                alt="cats"
                className="w-96 md:h-60 object-cover cursor-pointer"
              />

              </a>
              <div className="hidden md:block flex-col justify-between p-4">
                <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                  Cats4Life
                </h2>
                <p className="text-lg">
                  A responsive web site using React.js , API
                </p>
                <div className="md:absolute bottom-4 text-blue-500">
                  <a href="https://catshopping.netlify.app/Cart">
                    URL: https://catshopping.netlify.app/Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center max-w-6xl relative">
            <div className="flex justify-center border rounded-2xl mt-12 gap-4 overflow-hidden">
              <a href="https://kian-searchphotos.netlify.app/">
              <img
                src={searchphotos}
                alt="searchphotos"
                className="w-96 md:h-60 object-cover cursor-pointer"
              />

              </a>
              <div className="hidden md:block flex-col justify-between p-4">
                <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                  Search Photos
                </h2>
                <p className="text-lg">
                  A responsive web site using React.js , API
                </p>
                <div className="md:absolute bottom-4 text-blue-500">
                  <a href="https://kian-searchphotos.netlify.app/">
                    URL:https://kian-searchphotos.netlify.app/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center max-w-6xl relative">
            <div className="flex justify-center border rounded-2xl mt-12 gap-4 overflow-hidden">
              <a href="https://kianzare.github.io/clock/">
              <img
                src={clock}
                alt="clock"
                className="w-96 md:h-60 object-cover cursor-pointer"
              />

              </a>
              <div className="hidden md:block flex-col justify-between p-4">
                <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                  Clock
                </h2>
                <p className="text-lg">
                  A responsive web site using React.js , API
                </p>
                <div className="md:absolute bottom-4 text-blue-500">
                  <a href="https://kianzare.github.io/clock/">
                    URL: https://kianzare.github.io/clock/
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center max-w-6xl relative">
            <div className="flex justify-center border rounded-2xl mt-12 gap-4 overflow-hidden">
              <a href="https://kian-calculator.netlify.app/">
              <img
                src={calculator}
                alt="calculator"
                className="w-96 md:h-60 object-cover cursor-pointer"
              />

              </a>
              <div className="hidden md:block flex-col justify-between p-4">
                <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                  Calculator
                </h2>
                <p className="text-lg">
                  A responsive web site using React.js , API
                </p>
                <div className="md:absolute bottom-4 text-blue-500">
                  <a href="https://kian-calculator.netlify.app/">
                    URL: https://kian-calculator.netlify.app/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
