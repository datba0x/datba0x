import HomeDots from "../assets/HomeDots.svg";
import HomeImage from "../assets/HomeImage.png";
import Aboutme from "../assets/Aboutme.png";
import HomeLogo from "../assets/HomeLogo.svg";
import type { Project } from "../components/ProjectComponent";
import ProjectComponent from "../components/ProjectComponent";
import type { Skill } from "../components/SkillComponent";
import SkillComponent from "../components/SkillComponent";
import { useState } from "react";
import { Link } from "react-router-dom";

export const mockProjects: Project[] = [
  {
    title: "Fitnutritionhub",
    description:
      "This project aims to develop an online platform where users can share recipes and workout routines.",
    imageUrl: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
    githubUrl: "https://github.com/datba0x/fitnutritionhub",
    techstack: "React, JavaScript, Nodejs",
  },
  {
    title: "Biztrack-v2",
    description:
      "BiztrackV2 is a Kanban-style project management and team collaboration application.",
    imageUrl: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    githubUrl: "https://github.com/datba0x/Biztrack-v2",
    techstack: ".net Core, Nextjs, postgresql",
  },
  {
    title: "Mentora",
    description:
      "Mentora is a comprehensive online learning platform designed specifically for the Vietnamese market",
    imageUrl: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    githubUrl: "https://github.com/C2-SE16/BE-Mentora",
    techstack: "NestJS, Next.js, PostgreSQL",
  },
];

export const mockSkills: Skill[] = [
  {
    title: "Languages",
    description: "TypeScript Lua Python JavaScript",
  },
  {
    title: "Databases",
    description: "SQLite PostgreSQL Mongo",
  },
  {
    title: "Tools",
    description: "VSCode Neovim Linux Figma XFCE Arch Git Font Awesome",
  },
  {
    title: "Other",
    description: "HTML CSS EJS SCSS REST Jinja",
  },
  {
    title: "Frameworks",
    description: "React Vue Disnake Discord.js Flask Express.js",
  },
];

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4 p-4">
      {/* Header */}
      <div className="col-span-1 md:col-span-5 md:col-start-2 grid grid-cols-1 md:grid-cols-5 items-center">
        {/* Logo */}
        <div className="col-span-2 flex justify-between items-center md:block">
          <h1>datba</h1>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="col-span-3 hidden md:flex justify-end">
          <div className="flex flex-row gap-4">
            <h2
              onClick={() => {
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white font-medium hover transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#C778DD]">#</span>
              home
            </h2>
            <h2
              onClick={() => {
                document
                  .getElementById("works")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white font-medium hover transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#C778DD]">#</span>works
            </h2>
            <h2
              onClick={() => {
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white font-medium hover transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#C778DD]">#</span>skills
            </h2>
            <h2
              onClick={() => {
                document
                  .getElementById("about-me")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white font-medium hover transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#C778DD]">#</span>about-me
            </h2>
            <h2
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="text-white font-medium hover transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#C778DD]">#</span>contact
            </h2>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#1a1a1a] p-4 mt-2 rounded-lg">
          <div className="flex flex-col gap-4 text-white font-medium">
            <h2
              onClick={() => {
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="hover transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#C778DD]">#</span>home
            </h2>
            <h2
              onClick={() => {
                document
                  .getElementById("works")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="hover transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#C778DD]">#</span>works
            </h2>
            <h2
              onClick={() => {
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="hover transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#C778DD]">#</span>skills
            </h2>
            <h2
              onClick={() => {
                document
                  .getElementById("about-me")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="hover transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#C778DD]">#</span>about-me
            </h2>
            <h2
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="hover transition-transform duration-300 hover:scale-105"
            >
              <span className="text-[#C778DD]">#</span>contact
            </h2>
          </div>
        </div>
      )}

      {/* Home */}
      <div
        id="home"
        className="col-span-1 md:col-span-5 md:col-start-2 grid grid-cols-1 md:grid-cols-5 items-start gap-8"
      >
        <div className="md:col-span-3">
          <h1 className="text-3xl text-white font-semibold">
            datba is a <span className="text-[#C778DD]">.net developer</span>{" "}
            and <span className="text-[#C778DD]">front-end developer</span>
          </h1>
          <h2 className="text-lg font-medium text-gray-500 py-6">
            He crafts responsive websites where technologies meet creativity
          </h2>
          <button className="border border-[#C778DD] p-2 hover transition-transform duration-300 hover:scale-105">
            Contact me!!
          </button>
        </div>

        {/* Home Image */}
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-full max-w-xs pb-10">
            <img
              src={HomeImage}
              alt="Portrait silhouette in hoodie and cap"
              className="w-full rounded-sm "
            />
            <img
              src={HomeLogo}
              alt=""
              aria-hidden="true"
              className="absolute -left-6 md:-left-10 top-4 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"
            />
            <img
              src={HomeDots}
              alt=""
              aria-hidden="true"
              className="absolute -right-6 md:-right-10 bottom-6 h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
            />
            <div className="absolute -bottom-4 left-0 right-0 flex items-center gap-2 border border-gray-500 px-3 py-2">
              <span className="h-4 w-4 bg-[#C778DD]" />
              <p className="text-xs md:text-sm text-gray-400">
                Currently working on{" "}
                <span className="text-white font-semibold">Akabot</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Quote */}
      <div className="col-span-1 md:col-span-3 md:col-start-3 grid grid-cols-1 md:grid-cols-4 pt-10 md:pt-16">
        <div className="md:col-span-4 flex items-center justify-center border border-gray-500 relative p-6 md:p-8">
          <span className="absolute -top-2 left-8 text-gray-300 text-2xl md:text-3xl">
            “
          </span>
          <h1 className="text-lg md:text-xl text-white text-center">
            With great power comes great electricity bill
          </h1>
        </div>

        <div className="md:col-span-1 md:col-start-4 flex items-center justify-end border border-gray-500 relative p-4">
          <span className="absolute -top-2 right-8 text-gray-300 text-2xl md:text-3xl">
            ”
          </span>
          <h1 className="text-m md:text-xl text-white">– Dr. Who</h1>
        </div>
      </div>
      {/* Decorator box */}
      <div className="hidden md:flex col-span-1 md:col-start-7 items-center justify-end">
        <div className="w-16 h-16 lg:w-24 lg:h-24 border-t border-l border-b border-gray-500"></div>
      </div>
      {/* Project */}
      <div
        id="works"
        className="col-span-1 md:col-span-5 md:col-start-2 grid grid-cols-1 md:grid-cols-5 items-center pt-10"
      >
        <div className="md:col-span-3 flex flex-row items-center gap-4 pb-4 md:pb-8">
          <h1 className="text-2xl md:text-3xl text-white font-medium">
            <span className="text-[#C778DD]">#</span>projects
          </h1>
          <div className="bg-[#C778DD] h-px w-20 md:w-full"></div>
        </div>
        <div className="md:col-span-1 md:col-start-5 flex items-center pb-4 md:pb-8 hover transition-transform duration-300 hover:scale-105">
          <Link to={"https://github.com/datba0x"}>
            <h2>View all ~~{">"}</h2>
          </Link>
        </div>

        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockProjects.map((project, index) => (
            <ProjectComponent key={index} project={project} />
          ))}
        </div>
      </div>
      {/* Skill */}
      <div
        id="skills"
        className="col-span-1 md:col-span-5 md:col-start-2 grid grid-cols-1 md:grid-cols-5 items-start pt-10 gap-6"
      >
        <div className="md:col-span-2 flex flex-row items-center gap-4 pb-4 md:pb-8">
          <h1 className="text-2xl md:text-3xl text-white font-medium">
            <span className="text-[#C778DD]">#</span>skills
          </h1>
          <div className="bg-[#C778DD] h-px w-full"></div>
        </div>
        <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Deco Skill */}
          <div className="md:col-span-2 relative h-48 md:h-auto">
            <img
              src={HomeLogo}
              alt=""
              aria-hidden="true"
              className="absolute bottom-6 left-6 md:bottom-10 md:left-10"
            />

            <img
              src={HomeDots}
              alt=""
              aria-hidden="true"
              className="absolute top-0 left-6 md:left-10"
            />

            <img
              src={HomeDots}
              alt=""
              aria-hidden="true"
              className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            <div className="hidden md:block border border-gray-500 w-10 h-10 absolute top-1/2 right-10 -translate-y-1/2"></div>

            <div className="hidden md:block border border-gray-500 w-20 h-20 absolute top-6 right-16"></div>
          </div>

          {/* Skill */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {mockSkills.map((skill, index) => (
              <SkillComponent
                key={index}
                skill={skill}
                className={
                  skill.title === "Other"
                    ? "md:row-start-2 md:col-start-2"
                    : skill.title === "Frameworks"
                    ? "md:row-start-2 md:col-start-3"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
      {/* About me */}
      <div
        id="about-me"
        className="col-span-1 md:col-span-5 md:col-start-2 grid grid-cols-1 md:grid-cols-5 items-start pt-10 gap-6"
      >
        <div className="md:col-span-3 flex flex-row items-center gap-4 pb-4 md:pb-8">
          <h1 className="text-2xl md:text-3xl text-white font-medium flex items-center gap-1">
            <span className="text-[#C778DD]">#</span>
            <span className="whitespace-nowrap">about-me</span>
          </h1>
          <div className="hidden md:block bg-[#C778DD] h-px w-full"></div>
        </div>

        <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3 grid gap-4 md:gap-7">
            <h3 className="text-base md:text-lg font-medium text-gray-500">
              Hello, i’m datba!
            </h3>
            <h3 className="text-base md:text-lg font-medium text-gray-500">
              I’m a self-taught software developer based in Danang, Vietnam. I
              specialize in building high-quality applications and turning ideas
              into clean, scalable solutions.
            </h3>
            <h3 className="text-base md:text-lg font-medium text-gray-500">
              Software development has been my passion for over a year. I
              improve user experience, and bring projects from concept to
              production. I constantly explore new technologies, tools, and
              frameworks to sharpen my skills and stay up-to-date in the
              fast-moving tech world.
            </h3>
            <div className="justify-start">
              <button className="border border-[#C778DD] py-2 px-4 hover transition-transform duration-300 hover:scale-105 text-sm md:text-base">
                {"Read more ->"}
              </button>
            </div>
          </div>
          <div className="md:col-span-2 md:col-start-4 flex justify-center">
            <div className="relative w-full max-w-xs">
              <img
                src={Aboutme}
                alt="Hooded figure with hand near head"
                className="w-full"
              />
              <img
                src={HomeDots}
                alt=""
                aria-hidden="true"
                className="absolute -left-4 md:-left-6 top-4 md:top-6 h-12 w-12 md:h-16 md:w-16 opacity-80"
              />
              <img
                src={HomeDots}
                alt=""
                aria-hidden="true"
                className="absolute right-0 top-1/2 h-12 w-12 md:h-16 md:w-16 -translate-y-1/2 transform opacity-80"
              />
              <div className="absolute -bottom-1 left-0 right-0 mx-auto h-px w-3/4 bg-[#C778DD]" />
            </div>
          </div>
        </div>
      </div>
      {/* Contact */}
      <div
        id="contact"
        className="col-span-1 md:col-span-5 md:col-start-2 grid grid-cols-1 md:grid-cols-5 pt-10 gap-6"
      >
        <div className="md:col-span-2 flex flex-row items-center gap-4 pb-4 md:pb-8">
          <h1 className="text-2xl md:text-3xl text-white font-medium">
            <span className="text-[#C778DD]">#</span>contact
          </h1>
          <div className="bg-[#C778DD] h-px w-full"></div>
        </div>
        <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3">
            <h3 className="text-base md:text-lg font-medium text-gray-500">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </h3>
          </div>
          <div className="md:col-span-1 md:col-start-5 flex items-start md:items-end">
            <div className="border border-gray-500 w-full h-auto md:h-[140px] p-4 space-y-3">
              <h1 className="font-medium text-sm md:text-base text-white">
                Message me here
              </h1>
              <div className="space-y-2">
                {/* Github */}
                <div className="flex flex-row items-center gap-3 hover transition-transform duration-300 hover:scale-105">
                  <Link to="https://github.com/datba0x">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.486 2 12.021c0 4.424 2.865 8.18 6.839 9.504.5.091.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.907-.62.069-.608.069-.608 1.002.071 1.529 1.03 1.529 1.03.892 1.53 2.341 1.088 2.91.833.091-.648.35-1.088.636-1.338-2.221-.253-4.555-1.115-4.555-4.961 0-1.096.39-1.993 1.029-2.695-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.029A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.299 2.747-1.029 2.747-1.029.546 1.378.202 2.397.1 2.65.64.702 1.028 1.599 1.028 2.695 0 3.857-2.337 4.705-4.565 4.953.359.31.678.92.678 1.854 0 1.338-.012 2.419-.012 2.748 0 .267.18.579.688.48C19.14 20.197 22 16.442 22 12.021 22 6.486 17.522 2 12 2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h3 className="text-sm md:text-base font-medium text-gray-500">
                      datba0x
                    </h3>
                  </Link>
                </div>
                {/* Mail */}
                <div className="flex flex-row items-center gap-3 hover transition-transform duration-300 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M4 6h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1Zm8 5.5L20 8H4l8 3.5Z" />
                  </svg>
                  <h3 className="text-sm md:text-base font-medium text-gray-500">
                    datba.dev
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
