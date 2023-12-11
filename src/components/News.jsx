import NewsCard from "./NewsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const News = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const logos = ["/images/nra.png", "/images/usas.png", "/images/nssf.png"];
  return (
    <div className="flex flex-col gap-y-[1.5rem] items-center justify-center py-[1.5rem]">
      <div className="flex flex-col gap-y-1">
        <h2
          className={` text-textGrey sm:text-5xl text-4xl font-extrabold px-[.3rem]`}
        >
          News & Articles
        </h2>
        <div
          className=" bg-primary_blue ml-[80%]"
          style={{ width: "4.3rem", height: ".3rem" }}
        ></div>
      </div>
      <div className="bg-[url('/images/banner_bg_1.png')] bg-cover bg-center w-full p-[2rem] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
            <NewsCard key={i} />
          ))}
        </Slider>
      </div>
      <div className="logos flex items-center sm:gap-x-[2rem] gap-x-[.5rem]">
        {logos.map((logo, i) => (
          <img
            src={`${logo}`}
            alt={`logo`}
            key={i}
            className="object-cover w-[100px]"
          />
        ))}
      </div>
    </div>
  );
};

export default News;
