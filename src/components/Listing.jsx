import { Link } from "react-router-dom";
import { MdEdit, MdDelete } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Listing = () => {

  return (
    <div className="listing flex sm:flex-row flex-col items-center rounded-lg shadow-lg justify-center border border-[#808080] bg-white">
      {/* Image Slider */}
      <div className="image py-[.5rem]">
        <img
          src="/images/rifle.png"
          className="lg:w-[50%] w-[70%] object-cover mx-auto"
          alt={`ProductImg`}
        />
      </div>
      {/* Details */}
      <div className="details text-white w-full bg-primary_blue lg:px-[1.5rem] px-[1rem] py-[1rem]">
        <div className="actions flex items-center justify-end">
          <Link to="/user/edit/1">
            <MdEdit className="text-[1.5rem] text-white cursor-pointer" />
          </Link>
          <MdDelete className="text-[1.5rem] text-[#C90000] cursor-pointer" />
        </div>
        <div className="text py-[1rem] sm:pr-[1.5rem]">
          <h2 className="font-bold lg:text-[1.5rem] text-[1.25rem] pb-[1rem]">
            HORNADY 35 rem 35 Remington 20 rounds FTX lever revolution
          </h2>
          <p className="font-light pb-[1rem]">
            Hornady 35 remington 35 REM FTX 200gr 20 Rounds
          </p>
        </div>
        <h3 className="price text-right font-semibold font-opSans text-[1.5rem]">
          $22
        </h3>
      </div>
    </div>
  );
};

export default Listing;
