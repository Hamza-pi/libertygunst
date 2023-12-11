import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FollPrdct from "../components/FollPrdct";
import ProductCard from "../components/ProductCard";
import Tab from "../components/Tab";
import Pagination from "../components/Pagination";
import useScrollToTop from "../hooks/scrollToTop"
const Home = () => {
  useScrollToTop()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {/* Banner Slider */}
      <div className="bg-[url('/images/banner_bg_1.png')] bg-cover bg-center w-full py-[1rem] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        <div className="py-[1rem] 2xl:py-[3rem]">
          <Slider {...settings}>
            {[1, 2, 3].map((id) => (
              <div key={id}>
                <img
                  src="/images/banner1.png"
                  alt="banner"
                  className="object-contain text-center relative 2xl:w-[80%] lg:w-[70%] w-[80%] ml-[15%] z-20"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Specific Listings */}
      <div className="flex lg:flex-row flex-col gap-y-2 gap-x-4 items-start justify-between lg:px-[4rem] lg:py-[2rem] 2xl:px-[8rem] 2xl:py-[4rem] px-[.7rem] py-[1.5rem] font-segoe">
        {/* Followed Listings */}
        <div className="border-[2px] border-[#CFCFCF] px-[1rem] py-[1.5rem]">
          <div className="flex flex-col gap-y-1">
            <h2 className={` text-textGrey text-3xl font-extrabold px-[.3rem]`}>
              Followed Listings
            </h2>
            <div
              className=" bg-primary_blue"
              style={{ width: "3rem", height: ".3rem" }}
            ></div>
          </div>
          <div className="products grid md:grid-cols-2 grid-cols-1 gap-[1.5rem] pt-[2.5rem] pr-[1rem]">
            {[1, 2].map((item, i) => (
              <FollPrdct key={i} />
            ))}
          </div>
          <Pagination pageCount={15}/>
        </div>
        {/* Top Listings */}
        <div className="border-[2px] border-[#CFCFCF] max-h-[715px] overflow-y-scroll">
          <div className="flex flex-col gap-y-2  px-[1rem] py-[1.5rem]">
            <h2 className={` text-textGrey text-3xl font-extrabold px-[.3rem]`}>
              Top Listings
            </h2>
            <div
              className=" bg-primary_blue"
              style={{ width: "3.4rem", height: ".3rem" }}
            ></div>
          </div>
          <div className="products grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4 p-[1rem] pt-[2rem]">
            {[1, 2, 3, 5, 6].map((item, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
      {/* New Listings */}
      <div className="py-[1.5rem] flex flex-col gap-y-4 items-center justify-center font-segoe">
        <div className="flex flex-col gap-y-1">
          <h2
            className={` text-textGrey sm:text-5xl text-4xl font-extrabold px-[.3rem]`}
          >
            New Listings
          </h2>
          <div
            className=" bg-primary_blue"
            style={{ width: "4.5rem", height: ".3rem" }}
          ></div>
        </div>
        <Tab />
        <div className="new_listings grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-[1.5rem] px-[2rem] pt-[1rem]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
            <ProductCard key={i} />
          ))}
        </div>
        <Pagination pageCount={5}/>
      </div>
      {/* News & Articles */}
    </>
  );
};

export default Home;
