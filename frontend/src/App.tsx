import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { BiSearchAlt2, BiBell } from "react-icons/bi";
import { TbMessages } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { links } from "./Data/dummy";
import { HiOutlineLogout, HiOutlineChevronDown } from "react-icons/hi";
import { useGlobalContext } from "./Contexts/ContextProvider";
import { useScrollPosition } from "./Hooks/useScrollPosition";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Ecommerce,
  Orders,
  Pyramid,
  Stacked,
} from "./Pages";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

export default function App() {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(false);
  const { setActiveMenu, activeMenu } = useGlobalContext();

  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <div>
      <BrowserRouter>
        {/* <TooltipComponent content="Settings" position="TopCenter">
							<button
								type="button"
								className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
							>
								<FiSettings className="p-1 bg-amber-400 rounded-full" />
							</button>
						</TooltipComponent> */}
        <div className="flex flex-no-wrap">
          {/* Sidebar starts */}

          <div className="absolute lg:relative w-80 h-screen shadow hidden lg:block overflow-hidden overflow-y-scroll">
            <div className="h-16 w-full flex items-center px-8 mt-4">
              <h1>logo</h1>
            </div>
            <ul aria-orientation="vertical" className=" py-6">
              {links.map((item, index) => (
                <div key={index}>
                  <div className="pl-4 mx-4 my-2">
                    <h3>{item.title}</h3>
                  </div>
                  {item.links.map((item, index) => (
                    <li
                      onClick={() => setActiveMenu(false)}
                      key={index}
                      className="pl-4 mx-4 hover:bg-color-3 rounded-2xl cursor-pointer text-sm leading-3 tracking-normal py-3"
                    >
                      <div className="pl-3 flex items-center">
                        <div className="bg-color-2 p-2 rounded-xl">
                          {item.icon}
                        </div>
                        <span className="ml-2 ">{item.name}</span>
                      </div>
                    </li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full h-full absolute z-40  transform  translate-x-0 "
                : "   w-full h-full absolute z-40  transform -translate-x-full"
            }
            id="mobile-nav"
          >
            <div
              className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden"
              onClick={() => setShow(!show)}
            />
            <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4 bg-gray-100 lg:hidden transition duration-150 ease-in-out h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="flex items-center justify-between px-8">
                    <div className="h-16 w-full flex items-center">logo</div>
                    <div
                      id="closeSideBar"
                      className="flex justify-end cursor-pointer"
                      onClick={() => setShow(!show)}
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
          <div className=" w-full h-screen overflow-y-scroll">
            {/* Navigation starts */}
            <nav
              className={
                scrollPosition > 0
                  ? "transition-shadow sticky h-16 flex items-center lg:items-stretch justify-end lg:justify-between mx-10 mt-4 rounded-2xl bg-color-1 shadow  z-10"
                  : "transition-shadow sticky top-4  h-16 flex items-center lg:items-stretch justify-end lg:justify-between mx-10 mt-4 rounded-2xl bg-slate-200 shadow  z-10"
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
                        <BiBell color="#718096" className="text-2xl" />
                        <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                      </div>
                    </div>
                    <div className="h-full w-20 flex items-center justify-center  cursor-pointer text-gray-600">
                      <TbMessages className="text-2xl" color="#718096" />
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
                      <p className="text-gray-800 text-sm mx-3">Osama</p>
                      <div className="cursor-pointer text-gray-600">
                        <HiOutlineChevronDown />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="text-gray-600 mr-8 visible lg:hidden relative"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  " "
                ) : (
                  <RiMenu4Line className=" text-3xl cursor-pointer" />
                )}
              </div>
            </nav>
            {/* Navigation ends */}
            <div className="">
              <Routes>
                <Route path="/" element={<Ecommerce />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="*" element="Error 404, Not Found" />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
