import Select from "react-select";
import { Link } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
  const categories = [
    { value: "All Categories", label: "All Categories" },
    { value: "Rifels", label: "Rifels" },
    { value: "Shotguns", label: "Shotguns" },
    { value: "Ammo", label: "Ammo" },
    { value: "Pistols", label: "Pistols" },
    { value: "Accessories", label: "Accessories" },
  ];

  const dropDownStyle = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      border: "none",
      cursor: "pointer",
      background: "#5D5D5D",
      borderRadius: "none",
      paddingInline: "1rem",
      paddingBlock: ".7rem",
      width: "200px",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#ffffff",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#ffffff",
      border: "none",
      margin: "0",
      padding: "0",
    }),
    menu: (provided, state) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      color: "#ffffff",
      background: "#5D5D5D",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused && "#3663F0",
      color: "white",
    }),
  };

  const [display, setDisplay] = useState(false);

  return (
    <nav className="bg-gradient-to-b z-50 from-black to-grey flex items-center justify-between font-segoe pl-[2rem] sticky top-0">
      {/* Logo */}
      <Link to="/" className="text-white font-bold text-xl xl:text-3xl w-auto xl:w-[25%] text-center">
        <h2>
          Liberty Gun Trader
        </h2>
      </Link>

      {/* Menu Button for small screen */}

      <div
        className="text-primary_blue text-xl cursor-pointer lg:hidden block px-[1rem] py-[1.5rem]"
        onClick={() => setDisplay(true)}
      >
        <AiOutlineMenu />
      </div>

      {/* Nav Items */}

      <div
        className={`w-auto lg:block xl:w-[75%] lg:static absolute top-0 right-0 lg:bg-none bg-gradient-to-b from-black to-grey lg:p-0 px-[1rem] lg:min-h-0 min-h-screen ${
          display ? "block" : "hidden"
        }`}
      >
        <div
          className="text-primary_blue text-[2rem] cursor-pointer lg:hidden block py-[1.5rem]"
          onClick={() => setDisplay(false)}
        >
          <AiOutlineCloseCircle />
        </div>
        {/* Top NavLinks */}
        <div className="flex lg:flex-row flex-col-reverse lg:gap-y-0 gap-y-[1rem] items-center justify-between py-[1rem] w-full">
          {/* Search */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-normal w-full lg:gap-y-0 gap-y-[1rem]">
            <input
              type="text"
              placeholder="Search..."
              className="border-[1px] w-auto 2xl:w-[50%] xl:w-[40%] w-full border-[#7E7E7E] outline-none bg-transparent px-[1rem] py-[1rem] text-[#BEBEBE]"
            />
            <Select
              options={categories}
              defaultValue={categories[0]}
              placeholder=" "
              styles={dropDownStyle}
            />
            <button className="border-none outline-none text-white font-bold bg-primary_blue lg:rounded-r-md rounded-none py-[1rem] px-[2.5rem] text-md">
              Search
            </button>
            <Link to="/search" className="px-[1rem]">
              <span className="text-primary_blue cursor-pointer">
                Advance Search
              </span>
            </Link>
          </div>
          {/* Profile */}
          <Link to="/user" className="flex items-center lg:justify-between justify-start px-[1rem]">
            <AiOutlineUser className="text-primary_blue text-[2rem] border-[1px] border-primary_blue rounded-full p-1" />

            <p className="text-white font px-[1rem]">Nicolas</p>
          </Link>
        </div>
        {/* Bottom NavLinks */}
        <div className="lg:bg-primary_blue bg-transparent px-[2rem] py-[1rem]">
          <ul className="flex items-center justify-start gap-x-[2rem] text-white font-semibold" onClick={()=>setDisplay(false)}>
            <li>
              <Link to="/">
                <p>Buy</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>Sell</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <p>News & Reviews</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
