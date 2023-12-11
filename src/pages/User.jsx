import ProfileImg from "../components/ProfileImg";
import { FaUser } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { PiToolboxFill } from "react-icons/pi";
import { LuHeartHandshake } from "react-icons/lu";
import { IoHelpCircleSharp } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { Link } from "react-router-dom";

const User = () => {

  const iconStyle = "text-primary_blue text-[2rem]";

  const menu = [
    {
      icon: <FaUser className={iconStyle} />,
      text: "My Profile",
      route: "profile",
    },
    {
      icon: <PiToolboxFill className={iconStyle} />,
      text: "My Listed Inventory",
      route: "listings",
    },
    {
      icon: <LuHeartHandshake className={iconStyle} />,
      text: "Terms of service",
      route: "",
    },
    {
      icon: <MdPrivacyTip className={iconStyle} />,
      text: "Privacy Policy",
      route: "",
    },
    {
      icon: <IoHelpCircleSharp className={iconStyle} />,
      text: "Help & Support",
      route: "",
    },
  ];

  return (
    <div className="py-[3rem] font-inter">
      <ProfileImg />
      <div className="menu py-[2rem] lg:w-[50%] w-[100%] mx-auto">
        <ul className="pt-[3rem] flex flex-col gap-y-6">
          {menu.map((item, i) => (
            <li key={i} className="border-l-[10px] border-transparent hover:bg-hover transition-all delay-150 ease-in-out hover:text-primary_blue hover:border-primary_blue px-[2rem] py-[1rem]">
              <Link to={`/user/${item.route}`} className="flex items-center justify-between">
                <div className="flex items-center justify-between gap-x-4">
                  {item.icon}
                  <p className="sm:text-[1.2rem] text-[1rem] font-medium">{item.text}</p>
                </div>
                <BsArrowRight className="text-primary_blue text-[2.5rem]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
