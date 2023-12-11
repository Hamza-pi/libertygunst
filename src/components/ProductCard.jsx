import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className="max-w-sm border font-segoe border-[#7D7D7D]">
      <div className="px-[.5rem] py-[2.5rem] text-center">
        <img
          className="object-cover w-[70%] mx-auto"
          src="/images/shotgun.png"
          alt="GunImg"
        />
      </div>
      <div className="px-5 py-[.5rem] border-t-[1px] border-[#7D7D7D] bg-[#EEEEEE]">
        <Link to="/product">
          <h5 className="mb-2 text-[1rem] font-bold text-black">
            HORNADY 35 rem 35 Remington 20 rounds FTX lever revolution
          </h5>
        </Link>
        <p className="mb-3 text-sm text-textGrey py-[1rem] pr-[2rem]">
          Hornady 35 remington 35 REM FTX 200gr 20 Rounds
        </p>
        <p className="font-bold text-black text-right">$122</p>
      </div>
    </div>
  );
};

export default ProductCard;
