import AuthLeft from "../components/AuthLeft";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const SignUp = () => {
  const inputStyle =
    "w-full text-inputText px-[1.2rem] py-[.5rem] rounded-md border-[1px] border-borderGrey outline-none shadow-inputShadow";

  return (
    <div className="font-segoe flex items-center">
      {/* Left */}
      <AuthLeft />
      {/* Right */}
      <div className="sm:w-1/2 w-full sm:pt-0 pt-3 flex flex-col items-center justify-center lg:px-[5rem] p-2 text-center">
        <Heading title={"Sign up"} underlineHeight={0.5} underlineWidth={4.5} />
        <p className=" font-normal text-textGrey2 lg:py-[2rem] py-[1rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis
          tincidunt
        </p>
        <div className="flex flex-col items-center justify-center lg:gap-y-3 gap-y-2 sm:w-full 2xl:w-[80%]">
          <input type="text" placeholder="Name" className={`${inputStyle}`} />
          <input
            type="text"
            placeholder="Username/Email"
            className={inputStyle}
          />
          <input
            type="text"
            placeholder="Address"
            className={`${inputStyle}`}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            className={`${inputStyle}`}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={inputStyle}
          />
          <Link to="/signup">
            <button className="border-none outline-none text-white font-bold bg-primary_blue rounded-md px-[2.5rem] py-2 shadow-inputShadow text-lg font-lato">
              Sign up
            </button>
          </Link>
          <p className="text-textGrey2  text-lg">
            Or{" "}
            <Link to="/login">
              <span className="text-primary_blue underline font-bold cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
