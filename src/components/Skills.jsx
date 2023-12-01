import webDev from "../assets/web0.webp";
import {skills} from "../data/Data"


function Skills() {
  return (
    <div id="skills" className="flex justify-center w-full max-w-6xl mt-2 mb-20 md:mb-60 lg:mb-10 h-[calc(100vh-64px)]">
      <div className="z-10 flex p-4 justify-center items-center">
        <section className="flex-col justify-center items-center">
          <span className="flex justify-center text-4xl sm:text-6xl font-bold">
            What I do
          </span>
          <br />
          <span className="flex justify-center text-lg sm:text-xl md:text-2xl">
            <p className="flex justify-center p-6">
              As a passionate and skilled web developer, I specialise in
              utilising JavaScript, React, HTML, CSS, and TailwindCSS to design
              and develop responsive and user-friendly websites. My expertise in
              these technologies enables me to create dynamic and visually
              appealing websites that cater to the needs of clients and users
              alike. With a keen eye for detail and a commitment to delivering
              high-quality work, I am confident in my ability to exceed
              expectations and deliver exceptional results.
            </p>
          </span>
          <div className="flex justify-center mb-10">
            <div className="flex justify-center items-center border rounded-2xl mt-4 md:mt-16 gap-4 overflow-hidden">
              <img src={webDev} alt="webDev" className="w-32 md:w-60 h-28 md:h-40 object-cover " />
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-yellow-400">
                  Frontend
                  Web Developer
                </h2>
                <p className="text-lg pr-2">
                  responsive and user-friendly web developer
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center object-cover gap-2 mt-8 md:mt-12">
            {skills.map((item) => (
                <img key={item.id} className="w-16 md:w-40 rounded-3xl md:p-2 hover:scale-125" src={item.imageUrl} alt={item.name} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
