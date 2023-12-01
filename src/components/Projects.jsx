import { projects } from "../data/Data";

function Projects() {
  return (
    <div id="projects" className="flex max-w-6xl justify-center items-center ">
      <section className="p-4 mb-16 justify-center items-center">
        <h1 className="flex justify-center text-4xl sm:text-6xl font-bold p-8">
          My Projects
        </h1>
        <span className="flex justify-center text-lg sm:text-xl md:text-2xl p-6">
          In my portfolio, I am thrilled to showcase my expertise in web
          development, particularly in JavaScript, React, HTML, CSS, and
          TailwindCSS. As a meticulous and dedicated developer, I take pride in
          ensuring that every aspect of my work is pixel perfect and visually
          appealing. I am committed to delivering exceptional results that cater
          to the needs of clients and users alike. With my skills and
          experience, I am passionate about helping businesses achieve their
          goals and establish a strong online presence. I am excited to
          collaborate with clients to create responsive and user-friendly
          websites that exceed expectations. Let&apos;s work together to bring
          your vision to life!
        </span>
        {/* Projects */}
        <div>
          {projects.map((item) => (
              <div
                key={item.id}
                className="flex justify-center max-w-6xl relative"
              >
                <div className="flex md:w-[900px] border rounded-2xl mt-12 gap-4 overflow-hidden ">
                  <div className="flex">
                    <div className="md:basis-2/5">
                      <a href={item.siteUrl}>
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className=" md:h-60 cursor-pointer"
                        />
                      </a>
                    </div>
                    <div className="hidden md:block flex-col justify-between p-4 basis-3/5">
                      <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                        {item.name}
                      </h2>
                      <p className="text-lg">{item.description}</p>
                      <p className="text-lg">{item.about}</p>
                      <div className="md:absolute max-w-xs bottom-2 text-blue-500">
                        <a href={item.siteUrl}>URL: {item.siteUrl}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
