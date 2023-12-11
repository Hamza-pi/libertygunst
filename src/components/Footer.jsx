import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { TbSend } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  const listStyle =
    "text-xl border-[2px] border-white rounded-full p-2 cursor-pointer";

  const spanStyle = "border-[1px] border-primary_blue p-2 rounded-full text-primary_blue cursor-pointers"

  return (
    <footer className="w-full font-segoe">
      <div className="top bg-black text-white flex flex-wrap items-center justify-between gap-[2rem] sm:px-[4rem] px-[1.5rem] py-[1.5rem]">
        <div className="left flex items-center justify-between gap-x-[3rem] lg:w-auto w-[100%]">
          <ul className="social_icons flex gap-x-[1rem]">
            <li className={listStyle}>
              <FaFacebookF />
            </li>
            <li className={listStyle}>
              <AiOutlineInstagram />
            </li>
            <li className={listStyle}>
              <FiTwitter />
            </li>
          </ul>
          <h3 className="sm:text-2xl text-base">Stay Connected</h3>
        </div>
        <div className="right flex items-center justify-center gap-x-[1rem] lg:w-auto w-full">
          <button className="bg-primary_blue border-none outline-none p-3 rounded-md">
            <TbSend className="text-[2rem]" />
          </button>
          <input
            type="text"
            placeholder="Enter your email"
            className="border-none outline-none bg-[#1F1F1F] text-white p-4 rounded-md w-[90%] xl:w-[30rem] lg:w-[25rem]"
          />
        </div>
      </div>
      <div className="footer bg-[#2B2B2B] text-white lg:flex items-center block justify-center sm:px-[4rem] px-[1.5rem] py-[1.5rem]">
        <div className="right lg:w-[40%] w-[100%]">
          <h2 className="sm:text-5xl text-3xl">Liberty Gun Trader</h2>
        </div>
        <div className="left lg:w-[60%] w-[100%] lg:p-0 pt-[2rem]">
          <ul className="flex sm:flex-row flex-col items-start justify-between gap-6">
            <li className="sm:w-[50%] w-[100%]">
              <h3 className="text-lg">About us</h3>
              <p className="pt-2 font-light pr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                nec ipsum facilisis, ultrices dolor sed, elementum arcu.
                Vestibulum sit amet elit vel magna elementum porta.
              </p>
            </li>
            <li className="sm:w-[50%] w-[100%]">
              <h3 className="text-lg">Contact us</h3>
              <div className="flex items-center justify-start gap-x-3 pt-2">
                <span className={spanStyle}>
                  <FaLocationDot />
                </span>
                <p>Lorem ipsum dolor sit amet, c</p>
              </div>
              <div className="flex items-center justify-start gap-x-3 pt-2">
                <span className={spanStyle}>
                  <BsFillTelephoneFill />
                </span>
                <p>Lorem ipsum dolor sit amet, c</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
