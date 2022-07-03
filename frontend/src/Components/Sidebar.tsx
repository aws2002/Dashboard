import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { BiSearchAlt2, BiBell } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";
import { links } from "../Data/dummy";
import { useGlobalContext } from "./../Contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";
const Sidebar: React.FC = () => {
  const { setActiveMenu, activeMenu } = useGlobalContext();
  return (
    <>
      {/* Sidebar starts */}
      <div className="absolute bg-main text-white  lg:relative w-80 h-screen shadow hidden lg:block overflow-hidden overflow-y-scroll">
        <div className="h-16 w-full flex items-center px-8 mt-4">
          <h1>logo</h1>
        </div>
        <ul aria-orientation="vertical" className=" py-6">
          {links.map((item, index) => (
            <li key={index}>
              <div className="pl-4 mx-4 my-2">
                <h3>{item.title}</h3>
              </div>
              {item.links.map((item, index) => (
                <NavLink to={`/${item.name}`} key={index} onClick={() => setActiveMenu(false)}
                className={({ isActive }) => {
                  return isActive
                    ? `flex items-center bg-white text-black`
                    : `flex items-center`
                }}>
                    <div className="pl-10 flex items-center">
                      <div className="bg-color-2 p-2 rounded-xl">
                        {item.icon}
                      </div>
                      <span className="ml-2 ">{item.name}</span>
                    </div>
                  
                </NavLink>
              ))}
            </li>
          ))}
        </ul>
      </div>
      {/*Mobile responsive sidebar*/}
      <div
        className={
          activeMenu
            ? "w-full h-full absolute z-40  transform  translate-x-0 "
            : "   w-full h-full absolute z-40  transform -translate-x-full"
        }
        id="mobile-nav"
      >
        <div
          className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
          onClick={() => setActiveMenu(!activeMenu)}
        />
        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
          <div className="flex flex-col justify-between h-full w-full">
            <div>
              <div className="flex items-center justify-between px-8">
                <div className="h-16 w-full flex items-center">logo</div>
                <div
                  id="closeSideBar"
                  className="flex justify-end cursor-pointer"
                  onClick={() => setActiveMenu(!activeMenu)}
                >
                  <IoCloseSharp className=" text-2xl" />
                </div>
              </div>
              <ul aria-orientation="vertical" className=" py-6">
                <li className="pl-6 cursor-pointer text-sm leading-3 tracking-normal pb-4 pt-5 text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <div className="w-6 h-6 md:w-8 md:h-8">
                      <MdOutlineDashboard className="text-2xl" />
                    </div>
                    <span className="ml-2 xl:text-base md:text-2xl text-base">
                      Dashboard
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <div className="flex justify-center mb-4 w-full px-6">
                <div className="relative w-full">
                  <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                    <BiSearchAlt2 className="" />
                  </div>
                  <input
                    className="bg-gray-200 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="border-t border-gray-300">
                <div className="w-full flex items-center justify-between px-6 pt-1">
                  <div className="flex items-center">
                    <img
                      alt="profile-pic"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                      className="w-8 h-8 rounded-md"
                    />
                    <p className="md:text-xl text-gray-800 text-base leading-4 ml-2">
                      Osama
                    </p>
                  </div>
                  <ul className="flex">
                    <li className="cursor-pointer pt-5 pb-3">
                      <TbMessages className="text-2xl" color="#718096" />
                    </li>
                    <li className="cursor-pointer pt-5 pb-3 pl-3">
                      <BiBell color="#718096" className="text-2xl" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Mobile responsive sidebar*/}
      {/* Sidebar ends */}
    </>
  );
};

export default Sidebar;
