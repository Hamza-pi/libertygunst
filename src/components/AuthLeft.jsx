import { FaFacebook, FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const AuthLeft = () => {
  return (
    <div className="bg-[url('/images/auth_bg_img.png')] sm:flex hidden flex-col items-center bg-no-repeat bg-cover bg-center w-1/2 min-h-screen justify-between py-[2rem] px-[3rem] 2xl:py-[10rem] relative">
      <h3 className="font-segoe font-bold text-white text-3xl 2xl:text-5xl z-10">
        LibertyGuns
      </h3>
      <div className="z-10">
        <h1 className=" text-4xl 2xl:text-6xl font-segoe text-white text-center font-bold">
          Your Gateway to Responsible Firearm Trading
        </h1>
        <div className="social_icons text-white flex items-center justify-center text-3xl 2xl:text-5xl cursor-pointer py-[2rem] gap-x-[1rem]">
          <FaFacebook />
          <FaTwitter />
          <BiLogoInstagramAlt />
        </div>
      </div>
      {/* Black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
};

export default AuthLeft;
