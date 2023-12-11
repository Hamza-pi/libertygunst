import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import useScrollToTop from "../hooks/scrollToTop";
const AdvanceSearch = () => {
  useScrollToTop()
  const products = Array.from({ length: 21 }, (_, index) => index + 1);
  const categories = [
    { value: "All Categories", label: "All Categories" },
    { value: "Rifels", label: "Rifels" },
    { value: "Shotguns", label: "Shotguns" },
    { value: "Ammo", label: "Ammo" },
    { value: "Pistols", label: "Pistols" },
    { value: "Accessories", label: "Accessories" },
  ];
  const btnStyle = "border border-primary_blue bg-[#EFEFEF] rounded-md py-2 hover:bg-primary_blue hover:text-white transition-all delay-150 ease-in-out";
  return (
    <>
      <div className="flex lg:flex-row flex-col items-start justify-between gap-[1.5rem] xl:px-[4rem] xl:py-[2rem] sm:px-[2rem] sm:py-[1rem] px-[1rem] py-[.5rem]">
        <form className="font-segoe border-[2px] border-[#7D7D7D] lg:py-[1.5rem] py-[1rem] lg:px-[1rem] px-[.5rem] flex items-stretch justify-center flex-col gap-5 lg:w-[40%] w-[100%]">
          <h3 className="font-bold lg:text-[2rem] text-[1.5rem] text-textGrey">
            Advance Search
          </h3>
          <div>
            <select
              id="categories"
              className="bg-gray-50 border border-[#D2D2D2] text-[#4B4B4B] text-sm font-semibold rounded-lg block w-full p-2.5 outline-none"
            >
              {categories.map((item, i) => (
                <option key={i}>{item.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="countries"
              className="block pb-2 pl-2 text-sm font-medium text-[#4B4B4B]"
            >
              Location
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-[#D2D2D2] text-[#4B4B4B] text-sm font-semibold rounded-lg block w-full p-2.5 outline-none"
            >
              <option hidden>Select Country</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="dealer"
              className="block pb-2 pl-2 text-sm font-medium text-[#4B4B4B]"
            >
              Dealer/Individual
            </label>
            <select
              id="dealer"
              className="bg-gray-50 border border-[#D2D2D2] text-[#4B4B4B] text-sm font-semibold rounded-lg block w-full p-2.5 outline-none"
            >
              <option hidden>Select Dealer/Individual</option>
              <option>Canada</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
          <div className="flex items-center justify-center gap-x-2 text-primary_blue font-semibold lg:text-[20px] lg:py-[1rem] ">
            <button className={`${btnStyle} lg:px-10 px-6`}>Active</button>
            <button className={`${btnStyle} lg:px-12 px-8`}>Sold</button>
          </div>
        </form>
        <div className="products grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 gap-x-[1rem] gap-y-[1.5rem] lg:w-[60%] w-[100%]">
          {products.map((product, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
      <Pagination pageCount={3}/>
    </>
  );
};

export default AdvanceSearch;
