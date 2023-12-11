import { Link } from "react-router-dom";
import { useState } from "react";
const FollPrdct = () => {

  const [followed,setFollowed] = useState(true)

  return (
    <div className="max-w-sm border font-segoe border-[#7D7D7D] relative">
      <div className="badge absolute -top-10 right-0 w-[6rem] h-[6rem] text-center flex flex-col justify-center items-center rounded-full bg-primary_blue text-white text-sm">
        <p>By</p>
        <p>Mufasa</p>
      </div>
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
        <p className="mb-3 text-sm text-textGrey py-[2rem] pr-[4rem]">
          Hornady 35 remington 35 REM FTX 200gr 20 Rounds
        </p>
        <p className="font-bold text-black text-right">$122</p>
        <div className="text-center">
          <button className={`${followed?'border-none bg-primary_blue text-white':'border border-primary_blue bg-transparent text-primary_blue'} outline-none font-bold rounded-md px-[2.5rem] py-2 shadow-inputShadow text-lg font-lato`} onClick={()=>setFollowed(!followed)}>
            {followed?'Following':'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollPrdct;
