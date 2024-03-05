import { useRef } from "react";
import { Navbar } from "../../components/navbar";

export const Home = () => {
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const portfolioRef = useRef<HTMLHeadingElement>(null);
  const contactRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (
    ref: React.RefObject<HTMLHeadingElement> | React.RefObject<HTMLDivElement>
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openNewTab = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div ref={mainRef} id="Home">
      <Navbar
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        mainRef={mainRef}
        scrollToRef={scrollToRef}
      />

      <div
        id="hero-container"
        className="relative flex bg-cover bg-hero-background-new max-[876px]:bg-hero-background-new-medium max-md:bg-hero-background-new-small max-[876px]:grid text-[#F5F5F5] bg-center  "
      >
        <div className=" flex flex-1 min-[877px]:justify-center items-center ">
          <div className="w-[80%]  max-[876px]:pl-10  text-sm max-[430px]:pl-5">
            <div className="">
              <h2 className="nokora-black text-xl text-[#9C84B8] max-[876px]:pt-10 max-[430px]:text-sm ">
                Hi, I'm
              </h2>
              <h1 className="text-6xl notable-regular max-md:text-5xl max-[650px]:text-4xl max-[490px]:text-3xl max-[430px]:text-2xl">
                Andrei
              </h1>
              <h1 className="text-4xl pb-10 notable-regular whitespace-nowrap min-[1290px]:text-6xl max-[876px]:text-5xl max-md:text-5xl max-md:pb-3 max-[650px]:text-4xl max-[490px]:text-3xl max-[430px]:text-2xl">
                Pirogov Huertas
              </h1>

              <h2 className=" text-xl text-[#9C84B8] pb-2 nokora-black max-[876px]:hidden max-md:block max-md:whitespace-nowrap max-md:text-white max-md:text-xl max-[650px]:text-base max-[490px]:text-sm max-[430px]:text-xs">
                A developer with a passion for creating experiences
              </h2>
              <p className=" text-base nokora-bold max-[876px]:hidden">
                I'm a future frontend and application developer, with a
                background in game design. I constantly strive to expand my
                knowledge so that I can more effectively tackle any future
                challenges that may arise on my path to create experiences that
                impact people positively .
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center ">
          <div className="flex-1 pl-10 min-[877px]:hidden max-md:hidden">
            <h2 className=" text-xl pb-2 nokora-black text-[#9C84B8] ">
              A developer with a passion for creating experiences
            </h2>
            <p className=" text-base  nokora-bold ">
              I'm a future frontend and application developer, with a background
              in game design. I constantly strive to expand my knowledge so that
              I can more effectively tackle any future challenges that may arise
              on my path to create experiences that positively impact people.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/src/assets/self-image-bw.png"
              alt="Image of Andrei"
              className=" px-28 mb-[-1px] pt-[30%] max-[1097px]:px-[10%] max-[876px]:pt-0 max-md:px-[30%]    "
            />
          </div>
        </div>
      </div>

      <div
        id="stack"
        className="h-40  mt-[-1px] bg-[#292736] flex gap-20 p-10 overflow-x-auto  max-md:h-28 max-md:py-5 max-sm:h-20 max-sm:gap-14"
      >
        <img src="/src/assets/stack/html-icon.svg" alt="html icon" />
        <img src="/src/assets/stack/css-icon.svg" alt="html icon" />
        <img
          src="/src/assets/stack/javascript-icon.svg"
          alt="javascript icon"
        />
        <img
          src="/src/assets/stack/typescript-icon.svg"
          alt="typescript icon"
        />
        <img src="/src/assets/stack/react-icon.svg" alt="react icon" />
        <img src="/src/assets/stack/vue-icon.svg" alt="vue icon" />
        <img src="/src/assets/stack/nodejs-icon.svg" alt="nodeJS icon" />
        <img src="/src/assets/stack/swift-icon.svg" alt="swift icon" />
        <img src="/src/assets/stack/github-icon.svg" alt="github icon" />
        <img src="/src/assets/stack/tailwind-icon.svg" alt="tailwind icon" />
      </div>

      <div
        id="content"
        className=" grid justify-center  bg-[#212025] text-[#F5F5F5]"
      >
        <h2 ref={aboutRef}></h2>
        <div className=" py-20  mx-[5%]">
          <div id="About" className=" md:hidden ">
            <h2 className="notable-regular text-4xl mb-8 max-[490px]:text-3xl">
              About
            </h2>
            <p className=" text-base text-[#ffffffaa] nokora-bold">
              I'm a future frontend and application developer, with a background
              in game design. I constantly strive to expand my knowledge so that
              I can more effectively tackle any future challenges that may arise
              on my path to create experiences that positively impact people.
            </p>
          </div>
          <div id="portfolio-container">
            <h2
              ref={portfolioRef}
              className="notable-regular text-4xl pt-20 max-[490px]:text-3xl"
            >
              Portfolio
            </h2>

            <div
              id="portfolio-projects-container"
              className="grid grid-cols-2 gap-y-32 gap-x-5 mt-10  max-md:grid-cols-1 max-md:gap-y-0 "
            >
              <div className="bg-white rounded-lg  h-fit">
                <a
                  href="https://andreipirhu.github.io/Unico/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/portfolio/Unico.png"
                    alt="Image of website Unico"
                    className=" rounded-lg hover:opacity-75 cursor-pointer"
                  />
                </a>
              </div>

              <div className=" max-md:pb-32 mt-1">
                <h2 className="notable-regular text-2xl max-[490px]:text-xl">
                  Unico - e-commerce
                </h2>
                <p className="pt-3">
                  An E-commernce website for unique pieces of clothing with
                  vibrant colors.
                </p>
                <p className="pt-3">
                  Crafted with React, Redux, Typescript and Tailwind CSS. Makes
                  use of Firebase for database management and user
                  authentication.
                </p>
                <div className="grid justify-center my-10">
                  <button
                    className="flex items-center max-w-[500px] px-8 py-2 bg-[#292736] rounded-md mb-5 hover:opacity-75"
                    onClick={() =>
                      openNewTab("https://andreipirhu.github.io/Unico")
                    }
                  >
                    <img
                      src="/src/assets/icons/globe-icon.svg"
                      alt="globe icon"
                      className="mr-3 h-5"
                    />
                    Live demo
                  </button>
                  <button
                    className="flex items-center max-w-[500px] px-8 py-2 bg-[#292736] rounded-md mb-5 hover:opacity-75"
                    onClick={() =>
                      openNewTab("https://github.com/AndreiPirHu/Unico")
                    }
                  >
                    <img
                      src="/src/assets/icons/github-icon.svg"
                      alt="github icon"
                      className="mr-3 h-5"
                    />
                    View the code
                  </button>
                </div>
              </div>

              <span className="block h-px bg-[#9C84B8] w-full max-md:hidden  "></span>
              <span className="block h-px bg-[#9C84B8] w-full max-md:hidden"></span>

              <div className=" bg-white rounded-lg h-fit">
                <a
                  href="https://andreipirhu.github.io/RecipeGenerator/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/portfolio/Recipe-generator.png"
                    alt="Image of website Recipe Generator"
                    className="rounded-lg hover:opacity-75 cursor-pointer "
                  />
                </a>
              </div>
              <div className="max-md:pb-32 ">
                <h2 className="notable-regular text-2xl mt-1 max-[490px]:text-xl">
                  Recipe Generator - AI
                </h2>
                <p className="pt-3">
                  A website that generates recipes based on the user's
                  ingredients with the help of AI. It then fetches fitting
                  pictures and calculates the nutritional values of the meals.
                </p>
                <p className="pt-3">
                  Crafted with React, Redux, Typescript and ExpressJS for
                  backend. Makes use of Firebase for database management and
                  user authentication.
                </p>
                <p className="pt-3 ">
                  It makes use of 3 API services: <br />
                  GPT API <br /> Google API <br />
                  Nutrition Analysis API
                </p>
                <div className="grid justify-center my-10">
                  <button
                    className="flex items-center max-w-[500px] px-8 py-2 bg-[#292736] rounded-md mb-5 hover:opacity-75"
                    onClick={() =>
                      openNewTab(
                        "https://andreipirhu.github.io/RecipeGenerator"
                      )
                    }
                  >
                    <img
                      src="/src/assets/icons/globe-icon.svg"
                      alt="globe icon"
                      className="mr-3 h-5"
                    />
                    Live demo
                  </button>
                  <button
                    className="flex items-center max-w-[500px] px-8 py-2 bg-[#292736] rounded-md mb-5 hover:opacity-75"
                    onClick={() =>
                      openNewTab(
                        "https://github.com/AndreiPirHu/RecipeGenerator"
                      )
                    }
                  >
                    <img
                      src="/src/assets/icons/github-icon.svg"
                      alt="github icon"
                      className="mr-3 h-5"
                    />
                    View the code
                  </button>
                </div>
              </div>

              <span className="block h-px bg-[#9C84B8] w-full max-md:hidden "></span>
              <span className="block h-px bg-[#9C84B8] w-full max-md:hidden"></span>

              <div className="bg-white rounded-lg  h-fit">
                <a
                  href="https://andreipirhu.github.io/Pazaak/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/portfolio/Pazaak.png"
                    alt="Image of website Pazaak"
                    className="rounded-lg  hover:opacity-75   cursor-pointer"
                  />
                </a>
              </div>
              <div className="mt-1 ">
                <h2 className="notable-regular text-2xl max-[490px]:text-xl">
                  Pazaak - Card Game
                </h2>
                <p className="pt-3">
                  A website that lets you play a version of the card game Pazaak
                  from Star Wars: Knights of the Old Republic. Pazaak is
                  inspired by Blackjack but has an extra element of depth in the
                  form of 3 extra cards that can be used during play. Here you
                  can play against the computer or against a friend.
                </p>
                <p className="pt-3 ">
                  Crafted with React, Redux and Javascript.
                </p>
                <div className="grid justify-center my-10">
                  <button
                    className="flex items-center max-w-[500px] px-8 py-2 bg-[#292736] rounded-md mb-5 hover:opacity-75"
                    onClick={() =>
                      openNewTab("https://andreipirhu.github.io/Pazaak/")
                    }
                  >
                    <img
                      src="/src/assets/icons/globe-icon.svg"
                      alt="globe icon"
                      className="mr-3 h-5"
                    />
                    Live demo
                  </button>
                  <button
                    className="flex items-center max-w-[500px] px-8 py-2 bg-[#292736] rounded-md mb-5 hover:opacity-75"
                    onClick={() =>
                      openNewTab("https://github.com/AndreiPirHu/Pazaak")
                    }
                  >
                    <img
                      src="/src/assets/icons/github-icon.svg"
                      alt="github icon"
                      className="mr-3 h-5"
                    />
                    View the code
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="contact-container" className="mt-20">
            <h2
              ref={contactRef}
              className="notable-regular text-4xl mb-8 max-[490px]:text-3xl"
            >
              Contact
            </h2>

            <div className="bg-[#292736] rounded-md p-5 grid gap-y-8">
              <h2 className="nokora-bold flex  text-xl max-sm:text-lg">
                If you have any questions or want to connect, feel free to
                contact me
              </h2>
              <h2 className="text-[#9C84B8]">
                Andrei.pirogov.huertas@gmail.com
              </h2>
              <div className="flex ">
                <a
                  href="https://www.linkedin.com/in/andrei-pirogov-huertas-772976254/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/icons/linkedin-icon.svg"
                    alt="linkedin icon"
                    className="h-8 mr-5 hover:opacity-75"
                  />
                </a>

                <a
                  href="https://github.com/AndreiPirHu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/icons/github-icon.svg"
                    alt="github icon"
                    className="h-8 hover:opacity-75"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
