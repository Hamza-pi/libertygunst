import { Link } from "react-router-dom";
const NewsCard = () => {
  return (
    <div className="max-w-sm font-segoe bg-black bg-opacity-[0.7] p-5">
      <Link to="/">
        <div className="text-center">
          <img
            className="object-cover"
            src="/images/NewsImg.png"
            alt="GunImg"
          />
        </div>
        <div className="px-1 py-[.5rem] bg-transparent text-center">
          <h5 className="sm:text-3xl text-2xl font-semibold text-white">
            Understanding What Is Shoting?
          </h5>
          <p className="mb-3 text-sm text-white p-[1rem]">
            Lorem ipsum dolor sit amet consectetur dapibus vitae
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
