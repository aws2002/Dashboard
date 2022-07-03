import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { BiSearchAlt2, BiBell } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { HiOutlineLogout, HiOutlineChevronDown } from "react-icons/hi";
import { useGlobalContext } from "../Contexts/ContextProvider";
import { useScrollPosition } from "../Hooks/useScrollPosition";
export default function Navbar() {
  const [profile, setProfile] = useState(false);
  const { setActiveMenu, activeMenu } = useGlobalContext();

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <>
      <nav
        className={
          scrollPosition > 0
            ? "transition-shadow sticky h-16 flex items-center lg:items-stretch justify-end lg:justify-between mx-10 mt-4 rounded-2xl bg-color-1 shadow  z-10"
            : "transition-shadow sticky h-16 flex items-center lg:items-stretch justify-end lg:justify-between mx-10 mt-4 bg-main rounded-2xl bg-color-1 shadow  z-10"
        }
      >
        <div className="hidden lg:flex w-full pr-6 ">
          <div className=" w-1/3 h-full hidden lg:flex items-center pl-6 pr-24"></div>
          <div className=" w-2/4 h-full hidden lg:flex items-center">
            <div className="relative w-full">
              <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                <BiSearchAlt2 />
              </div>
              <input
                className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="w-2/4 hidden lg:flex">
            <div className="w-full flex items-center pl-8 justify-end">
              <div className="items-center justify-center ">
                <div className="relative cursor-pointer text-gray-600">
                  <BiBell color="#fff" className="text-2xl" />
                  <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                </div>
              </div>
              <div className="h-full w-20 flex items-center justify-center  cursor-pointer text-gray-600">
                <TbMessages className="text-2xl" color="#fff" />
              </div>

              <div
                className="flex items-center relative cursor-pointer"
                onClick={() => setProfile(!profile)}
              >
                <div className="rounded-full">
                  {profile ? (
                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                        <div className="flex items-center">
                          <FiUser />
                          <span className="text-sm ml-2">My Profile</span>
                        </div>
                      </li>
                      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                        <div className="flex items-center">
                          <HiOutlineLogout />
                          <span className="text-sm ml-2">Sign out</span>
                        </div>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                  <div className="relative">
                    <img
                      className="rounded-full h-10 w-10 object-cover"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png"
                      alt="avatar"
                    />
                    <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                  </div>
                </div>
                <p className=" text-white text-sm mx-3">Osama</p>
                <div className="cursor-pointer text-gray-600">
                  <HiOutlineChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-gray-600 mr-8 visible lg:hidden relative"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          {activeMenu ? " " : <RiMenu4Line className=" text-3xl cursor-pointer" />}
        </div>
      </nav>
      {/* Navigation ends */}
    </>
  );
}
