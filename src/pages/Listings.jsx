import { Link } from "react-router-dom";
import Listing from "../components/Listing";
import Pagination from "../components/Pagination";
import useScrollToTop from "../hooks/scrollToTop";

const Listings = () => {
  useScrollToTop();
  return (
    <div className="flex flex-col gap-y-[4rem] item-center w-full justify-center px-[2rem] py-[4rem] font-segoe">
      <div className="w-full flex lg:flex-row flex-col gap-y-[2rem] items-center justify-center relative">
        {/* Heading */}
        <div className="flex flex-col gap-y-1">
          <h2
            className={` text-textGrey sm:text-4xl text-4xl font-[900] px-[.3rem]`}
          >
            Your Listings
          </h2>
          <div
            className=" bg-primary_blue mt-[.5rem] ml-[70%]"
            style={{ width: "4.3rem", height: ".3rem" }}
          ></div>
        </div>
        {/* Button */}
        <Link to="/user/add" className="lg:absolute right-0">
          <button className="border-none outline-none text-white font-bold bg-primary_blue rounded-md px-[2.5rem] py-2 shadow-inputShadow text-lg font-lato">
            Upload new listings
          </button>
        </Link>
      </div>
      {/* Listings */}
      <div className="flex flex-col gap-y-6 xl:w-[80%] 2xl:w-[60%] mx-auto">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <Listing key={i} />
        ))}
      </div>
      <Pagination pageCount={5}/>
    </div>
  );
};

export default Listings;
