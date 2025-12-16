import React, { useState, useContext, useEffect } from "react";
import { StoreContext } from "../../context/Storecontext";
import { assets } from "../../assets/assets";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setShowlogin }) => {
  const [menu, setmenu] = useState("Home");
  const navigate = useNavigate();
  const { token, settoken } = useContext(StoreContext);

  const [openDropdown, setOpenDropdown] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    settoken("");
    navigate("/");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(false);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="navbar flex gap-2.5 items-center justify-between relative">
      <Link to="/">
        <img src={assets.logo} width={150} alt="" />
      </Link>

      <ul className="navbar-menu flex list-none gap-5 text-gray-500">
        <li
          onClick={() => setmenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>

        <li
          onClick={() => {
            setmenu("menu");
            window.scrollTo({ top: 645, behavior: "smooth" });
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>

        <li
          onClick={() => {
            setmenu("mobile-app");
            window.scrollTo({ top: 2265, behavior: "smooth" });
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </li>

        <li
          onClick={() => {
            setmenu("contact-app");
            window.scrollTo({ top: 6000, behavior: "smooth" });
          }}
          className={menu === "contact-app" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>

      {!token ? (
        <button
          onClick={() => setShowlogin(true)}
          className="relative signin right-20 w-24 h-10 border border-red-500 text-red-500"
        >
          Sign In
        </button>
      ) : (
        <div
          className="nav-profile relative cursor-pointer z-50"
          onClick={(e) => {
            e.stopPropagation(); // keep dropdown open
            setOpenDropdown(!openDropdown);
          }}
        >
          <img src={assets.use} alt="" width={40} className="rounded-full" />

          <ul
            onClick={(e) => e.stopPropagation()} // prevent dropdown close
            className={`absolute bg-white shadow-lg right-0 mt-2 w-40 p-2 rounded z-50 flex-col gap-2
            ${openDropdown ? "flex" : "hidden"}`}
          >
            <li
              onClick={() => navigate("/myorder")}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
            >
              <img src={assets.bag} width={20} />
              <p>Orders</p>
            </li>

            <li
              onClick={() => navigate("/Cart")}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
            >
              <img src={assets.carti} width={20} />
              <p>Cart</p>
            </li>

            <hr className="border-gray-300" />

            <li
              onClick={logout}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded"
            >
              <img src={assets.lout} width={20} />
              <p>Logout</p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
