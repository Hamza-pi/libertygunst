import ProductCard from "../components/ProductCard";
import useScrollToTop from "../hooks/scrollToTop";
const SingleProduct = () => {
  const images = [
    "/images/rifle.png",
    "/images/rifle.png",
    "/images/rifle.png",
    "/images/rifle.png",
  ];

  useScrollToTop();

  return (
    <>
      {/* Product Details */}
      <div className="details font-segoe lg:px-[4rem] px-[2rem] lg:py-[2rem] py-[1rem]">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          <div className="img_viewer flex flex-col gap-y-8">
            <div className="large_image border border-[#7D7D7D]">
              <img
                src="/images/rifle.png"
                alt=""
                className="w-[80%] px-4 py-[8rem] object-cover mx-auto"
              />
            </div>
            <div className="small_images flex items-center justify-between w-full gap-x-4">
              {images.map((img, i) => (
                <div
                  className="w-[25%] border border-[#7D7D7D] sm:p-3 p-1"
                  key={i}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-[80%] mx-auto py-2 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="product_details flex flex-col gap-4">
            <h2 className="title font-semibold lg:text-[2.2rem] text-[1.5rem]">
              Wilson Combat 9mm - EDCX9, VFI SERIES, BLACK EDITION, SRO, vintage
              firearms
            </h2>
            <div className="owner flex sm:flex-row flex-col sm:items-center items-start gap-x-4">
              <div className="flex items-center">
                <img src="/images/verified.png" alt="" className="w-[70px]" />
                <p className="">Mufasa</p>
              </div>
              <button className="border-none outline-none text-white font-bold bg-primary_blue rounded-md px-[2.5rem] py-2 shadow-inputShadow text-lg font-lato">
                Following
              </button>
            </div>
            <div className="order flex flex-col border-[1.24px] border-[#7D7D7D] gap-y-[2rem]">
              <div className="bids flex flex-col font-semibold gap-y-2  px-[1.5rem] pt-[2rem]">
                <span className="flex items-center justify-between">
                  <p>Starting bid</p>
                  <p>$123</p>
                </span>
                <span className="flex items-center justify-between">
                  <p>Current bid</p>
                  <p>$123</p>
                </span>
              </div>
              <div className="offer flex items-center justify-center border-y-[1px] border-[#7D7D7D] py-[1rem]">
                <div className="flex items-center bg-[#EFEFEF] rounded-md pl-[.5rem]  xl:w-[70%] w-[90%] justify-between">
                  <div className="flex items-center xl:w-[70%] w-auto">
                    <p>$</p>
                    <input
                      type="number"
                      className="outline-none bg-transparent ml-1 w-[100%]"
                      min={1}
                    />
                  </div>
                  <button className="bg-primary_blue text-white font-semibold px-[1rem] py-[.5rem] rounded-r-md">
                    Place Offer
                  </button>
                </div>
              </div>
              <div className="buy flex sm:flex-row flex-col items-center justify-between px-2 pb-3 pr-5 gap-y-4">
                <div className=" font-lato font-semibold text-[1.5rem] text-center">
                  <p className="text-[.8rem]">Unit Price</p>
                  <p>$3,399.00</p>
                </div>
                <button className="border-none outline-none text-white font-bold bg-primary_blue rounded-md px-[2.5rem] py-2 shadow-inputShadow text-lg font-lato">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="descrpition py-12">
          <h3 className="font-semibold text-2xl">Item Description</h3>
          <div className="text text-left py-[1.5rem] text-[#686868]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              enim nisi blanditiis saepe beatae animi aliquid repellat
              reiciendis dolore qui voluptas cum reprehenderit voluptate ipsa
              dicta molestiae, nulla a commodi officiis, culpa aspernatur.
              Beatae sit nemo, doloribus saepe recusandae libero alias repellat!
              Aliquam voluptates saepe explicabo officia nam, laudantium quia
              numquam animi assumenda distinctio unde rem neque inventore sunt
              quasi natus ipsum esse veritatis asperiores sit, molestias
              voluptatibus accusantium. Fugit, omnis perferendis. Facere itaque
              eligendi impedit architecto ipsam quia officia praesentium
              expedita perferendis. Delectus dolorem sunt iure consectetur vitae
              cum ut eveniet pariatur, reprehenderit dolore esse animi
              perferendis velit facilis.
            </p>
          </div>
        </div>
        {/* Recommended */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-y-1">
            <h2 className={` text-textGrey sm:text-5xl text-xl font-extrabold`}>
              Recommended Listings
            </h2>
            <div
              className=" bg-primary_blue"
              style={{ width: "4rem", height: ".3rem" }}
            ></div>
          </div>
          <div className="products grid sm:grid-cols-3 grid-cols-1 2xl:grid-cols-4 gap-6 py-[2rem]">
            {[1, 2, 3, 4, 5, 6].map((item, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
