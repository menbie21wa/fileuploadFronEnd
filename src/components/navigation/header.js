import React, { Fragment, useState, useEffect, useRef } from "react";
import Logo from '../../img/Logo_p.png';
import { useNavigate } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const Header = () => {

  const [navBackground, setNavBackground] = useState(false);
  const [nav, setNav] = useState(false);
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const navigate = useNavigate();
  const location = useLocation();
  function logoutBtn() {
    // localStorage.clear();
    navigate("/login");
  }
  // if(userInfo==null)
  //    {
  //     navigate("/login");
  //     }
  const handleNav = () => {
    setNav((prev) => !prev);
  };
  const navRef = useRef();
  navRef.current = navBackground;

  const styles = () => {
    switch (location.pathname) {
      case "/":
        return navBackground ? "[#CECFCC]" : "[#CECFCC]";
      default:
        return navBackground ? "#[#CECFCC]" : "[#CECFCC]";
    }
  };
  // logo
  const logos = () => {
    switch (location.pathname) {
      case "/":
        return (
          <img
            className="xl:w-48 md:w-40 w-32 bg-[#CECFCC] h-16"
            src={navBackground ? Logo : Logo}
            alt="Logo"
          />
        );
      default:
        return (
          <img
            className="xl:w-48 md:w-40 w-32 bg-[#CECFCC] h-16"
            src={navBackground ? Logo : Logo}
            alt="Logo"
          />
        );
    }
  };

  const { t: translate, i18n } = useTranslation(['header']);
  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  const currentLanguage = localStorage.getItem('i18nextLng') || "";
  return (
    <>
      <div
        style={{
          background: styles(),
        }}
        className="xl:bg-[#CECFCC] right-0 left-0 z-10 py-2 border-none h-20"
        p="md"
      >
        <div
          className="pl-3 mt-2"
          style={{ display: "flex", alignItems: "center", height: "100%" }}
        >
          <div className="container flex justify-between items-center mx-auto px-3">
            <div className="flex">
              <div className="flex bg-white justify-between items-center fixed md:relative left-0 top-0 w-full">
                {/* <img src={Logo} className="h-20 w-20"/> */}
                <div className="flex">
                  <NavLink to="/">{logos}</NavLink>
                </div>
                <div
                  onClick={handleNav}
                  className="block md:hidden mr-4 text-textColor"
                >
                  {!nav && <RiMenuLine size={24} />}
                </div>
              </div>
            </div>
            <ul className="hidden md:flex">
              <li className="p-4 hover:bg-white">
                <NavLink to="/">
                  {translate("home")}
                </NavLink>
              </li>
              <li className="p-4 hover:bg-white">
                <NavLink
                  to="/images"
                >
                  {translate("images")}
                </NavLink>
              </li>
              <li className="p-4 hover:bg-white">
                <NavLink
                  to="/videos"
                >
                  {translate("videos")}
                </NavLink>
              </li>
              <li className="p-4 hover:bg-white">
                <NavLink
                  to="/audios"
                >
                  {translate("audios")}
                </NavLink>
              </li>
              <li className="p-4 hover:bg-white">
                <NavLink
                  to="/files"
                >
                  {translate("files")}
                </NavLink>
              </li>
              <li className="p-4 hover:bg-white">
                <NavLink
                  to="/addfile"
                >
                  {translate("addNew")}
                </NavLink>
              </li>
              <li className="p-4 hover:bg-white">
                <button
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  onClick={logoutBtn}
                >
                  {translate("logout")}
                </button>
              </li>
            </ul>
            <ul
              className={
                nav
                  ? "xl:hidden fixed left-0 top-0 w-full text-textColor bg-white ease-in-out duration-500 hover:opacity-75 text-lg hover:transform hover:scale-100 hover:md:scale-125 hover:duration-300"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >

              <div className="flex my-2 ml-4">
                <h1>
                  <img
                    className="w-20 ml-4 "
                    src={Logo}
                    alt="Logo"
                  />
                </h1>
                <h1 onClick={handleNav} className="mr-4">
                  {" "}
                  {nav && <HiOutlineX size={20} />}
                </h1>
              </div>

              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/"
                >
                  {translate("home")}
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/images"
                >
                  {translate("images")}
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/videos"
                >
                  {translate("videos")}
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/audios"
                >
                  {translate("audios")}
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/files"
                >
                  {translate("files")}
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  href="/addfile"
                >
                  {translate("addNew")}
                </a>
              </li>
              <li className="p-4 text-center">
                <button
                  className="leading-snug hover:text-primary font-display  hover:opacity-75 text-xl"
                  onClick={logoutBtn}
                >
                  {translate("logout")}
                </button>
              </li>
            </ul>

            <select className="mx-3 px-3 border-none rounded-full shadow-md" onChange={handleLangChange}>
              <option value="" selected hidden>{currentLanguage === 'am' ? "አማ" : "en"}</option>
              <option value="am">አማ</option>
              <option value="en">en</option>
            </select>

          </div>
        </div>
      </div>
      {/* </div> */}

    </>
  )
}
export default Header;