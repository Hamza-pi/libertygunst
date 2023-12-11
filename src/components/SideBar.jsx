import { IoIosNotificationsOutline, IoMdArrowDropdown } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { TfiPieChart } from "react-icons/tfi";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

const SideBar = () => {
  const [display, setDisplay] = useState(false);

  const iconStyle = "font-bold text-[1.5rem]";

  const links = [
    {
      icon: <IoIosNotificationsOutline className={iconStyle} />,
      title: "Notification",
      route: "notifications",
    },
    {
      icon: <LuUser2 className={iconStyle} />,
      title: "Users",
      route: "users",
    },
    {
      icon: <TfiPieChart className={iconStyle} />,
      title: "Payments",
      route: "/",
    },
    {
      icon: <IoMailOutline className={iconStyle} />,
      title: "Inbox",
      route: "chat",
    },
  ];

  return (
    <div className="xl:w-[20%] lg:w-[30%] w-[80%] sticky top-0 z-10">
      <div
        className="text-primary_blue text-xl cursor-pointer lg:hidden flex items-center justify-center px-[1rem] py-[1rem] bg-white absolute rounded-full shadow-xl"
        onClick={() => setDisplay(true)}
      >
        <AiOutlineMenu />
      </div>
      <div
        className={`lg:flex ${
          display ? "flex" : "hidden"
        } flex-col items-center justify-between min-h-[100vh] max-h-[100vh]  bg-white overflow-hidden py-[1.5rem] 2xl:py-[4rem] lg:px-0 px-[1rem] lg:shadow-none shadow-xl lg:static absolute top-0 -left-5`}
      >
        <div
          className="text-primary_blue text-[2rem] cursor-pointer lg:hidden block"
          onClick={() => setDisplay(false)}
        >
          <AiOutlineCloseCircle />
        </div>
        <Link to="/admin-panel">
          <h2 className="logo text-primary_blue font-segoe font-bold text-[2rem] text-center">
            LibertyGuns
          </h2>
        </Link>
        <div className="nav_links font-rubik flex items-center">
          <ul className="flex flex-col items-start gap-y-[2rem] 2xl:gap-y-[4rem]">
            {links.map((item, i) => (
              <li key={i}>
                <Link
                  to={`/admin-panel/${item.route}`}
                  className="flex items-start gap-x-[.8rem] font-normal text-[1.1rem] text-black"
                >
                  {item.icon}
                  <p>{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="admin flex items-center gap-x-[1rem] bg-primary_blue rounded-lg text-white px-[1rem] py-[.5rem] font-semibold cursor-pointer">
          <div className="img w-[63px] h-[63px]">
            <img
              src="/images/adminPic.png"
              className="object-cover w-full h-full"
              alt="AdminPic"
            />
          </div>
          <h3 className="text-[1.1rem]">Erfan Rezail</h3>
          <IoMdArrowDropdown className="text-[1.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
