import React from "react";

type SideMenuProps = {
  setSideMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  sideMenuActive: boolean;
  aboutRef: React.RefObject<HTMLHeadingElement>;
  portfolioRef: React.RefObject<HTMLHeadingElement>;
  contactRef: React.RefObject<HTMLHeadingElement>;
  mainRef: React.RefObject<HTMLDivElement>;
  scrollToRef: (ref: React.RefObject<HTMLHeadingElement>) => void;
};
export const SideMenu: React.FC<SideMenuProps> = ({
  setSideMenuActive,
  sideMenuActive,
  aboutRef,
  portfolioRef,
  contactRef,
  mainRef,
  scrollToRef,
}) => {
  return (
    <div
      className={`fixed flex  w-full h-full bg-[rgba(0,0,0,.3)] transition-all duration-500 ${
        sideMenuActive
          ? "opacity-100"
          : " opacity-0 pointer-events-none duration-[1200ms]"
      }
  `}
    >
      <div
        id="empty-space"
        onClick={() => setSideMenuActive(false)}
        className="flex-1"
      ></div>
      <menu
        className={`bg-[#292736] z-50 w-[60vw] max-w-[400px] h-screen transition-all duration-300 ${
          sideMenuActive ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-20 shadow-md flex ">
          <img
            src="https://raw.githubusercontent.com/AndreiPirHu/Portfolio/main/src/assets/icons/close-icon.svg"
            alt="Closing icon X"
            onClick={() => setSideMenuActive(false)}
            className=" cursor-pointer py-1"
          />
        </div>

        <ul className="grid justify-center gap-7 text-[#F5F5F5] text-2xl nokora-black mt-10 ">
          <li
            onClick={() => {
              scrollToRef(mainRef);
              setSideMenuActive(false);
            }}
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
            onClick={() => {
              scrollToRef(aboutRef);
              setSideMenuActive(false);
            }}
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
            onClick={() => {
              scrollToRef(portfolioRef);
              setSideMenuActive(false);
            }}
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
            onClick={() => {
              scrollToRef(contactRef);
              setSideMenuActive(false);
            }}
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
      </menu>
    </div>
  );
};
