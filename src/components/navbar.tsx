import React, { useEffect, useState } from "react";
import { SideMenu } from "./sideMenu";

type NavbarProps = {
  aboutRef: React.RefObject<HTMLHeadingElement>;
  portfolioRef: React.RefObject<HTMLHeadingElement>;
  contactRef: React.RefObject<HTMLHeadingElement>;
  mainRef: React.RefObject<HTMLDivElement>;
  scrollToRef: (ref: React.RefObject<HTMLHeadingElement>) => void;
};

export const Navbar: React.FC<NavbarProps> = ({
  aboutRef,
  portfolioRef,
  contactRef,
  mainRef,
  scrollToRef,
}) => {
  const [sideMenuActive, setSideMenuActive] = useState<boolean>(false);

  const sideMenuToggle = () => {
    setSideMenuActive(!sideMenuActive);
  };

  useEffect(() => {
    if (sideMenuActive) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "scroll";
    return () => {};
  }, [sideMenuActive]);

  return (
    <div className="top-0 sticky z-50 bg-[#292736] shadow-lg ">
      <SideMenu
        setSideMenuActive={setSideMenuActive}
        sideMenuActive={sideMenuActive}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        mainRef={mainRef}
        scrollToRef={scrollToRef}
      />
      <div
        id="container"
        className="flex px-16 max-md:px-5 max-md:justify-between"
      >
        <div id="left-container">
          <img
            src="https://raw.githubusercontent.com/AndreiPirHu/Portfolio/main/src/assets/icons/site-icon.svg"
            alt="Icon of initials APH"
            className="h-20 cursor-pointer"
            onClick={() => scrollToRef(mainRef)}
          />
        </div>

        <div
          id="center-container"
          className="flex items-center ml-20 max-md:hidden"
        >
          <ul className="flex gap-7 text-[#F5F5F5] text-lg nokora-black ">
            <li
              onClick={() => scrollToRef(mainRef)}
              className=" cursor-pointer max-md:hidden"
            >
              <div className="group">
                <h2>About</h2>
                <span
                  className="block h-0.5 bg-[#9C84B8] transition-all duration-500 scale-x-0
               group-hover:scale-x-100"
                ></span>
              </div>
            </li>
            <li
              onClick={() => scrollToRef(aboutRef)}
              className=" cursor-pointer md:hidden"
            >
              <div className="group">
                <h2>About</h2>
                <span
                  className="block h-0.5 bg-[#9C84B8] transition-all duration-500 scale-x-0
               group-hover:scale-x-100"
                ></span>
              </div>
            </li>
            <li
              onClick={() => scrollToRef(portfolioRef)}
              className=" cursor-pointer"
            >
              <div className="group">
                <h2>Portfolio</h2>
                <span
                  className="block h-0.5 bg-[#9C84B8] transition-all duration-500 scale-x-0
               group-hover:scale-x-100"
                ></span>
              </div>
            </li>
            <li
              onClick={() => scrollToRef(contactRef)}
              className=" cursor-pointer"
            >
              <div className="group">
                <h2>Contact</h2>
                <span
                  className="block h-0.5 bg-[#9C84B8] transition-all duration-500 scale-x-0
               group-hover:scale-x-100"
                ></span>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:hidden">
          <img
            src="https://raw.githubusercontent.com/AndreiPirHu/Portfolio/main/src/assets/icons/hamburger-menu.svg"
            alt="hamburger menu icon"
            className="h-12 cursor-pointer"
            onClick={sideMenuToggle}
          />
        </div>
      </div>
    </div>
  );
};
