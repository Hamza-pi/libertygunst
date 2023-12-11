import AuthLeft from "../components/AuthLeft";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const Ffl = () => {
  const [image, setImage] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const handleEditClick = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };
  return (
    <div className="font-segoe flex items-center">
      {/* Left */}
      <AuthLeft />
      {/* Right */}
      <div className="sm:w-1/2 w-full sm:pt-0 pt-3 flex flex-col items-center justify-center lg:px-[5rem] p-2 text-center">
        <Heading title={"FFL"} underlineHeight={0.5} underlineWidth={4} />
        <p className=" font-normal text-textGrey2 lg:py-[2rem] py-[1rem]">
          Upload a picture of your FFL here to be verified as a dealer
        </p>
        <div className="flex flex-col items-center justify-center gap-y-16 sm:w-full 2xl:w-[80%]">
          <div className="flex flex-col items-center gap-y-4">
            <div onClick={handleEditClick}>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={handleImageChange}
              />
              <h3 className="text-primary_blue cursor-pointer font-semibold text-[1.1.2rem] underline">
                Upload Picture
              </h3>
            </div>
            <div className={`w-[120px] ${image?'block':'hidden'} px-2 py-4 border border-[#7D7D7D]`}>
              <img src={image} alt="Img" className="w-[80%] mx-auto" />
            </div>
          </div>
          <Link to="/signup">
            <button className="border-none outline-none text-white font-bold bg-primary_blue rounded-md px-[2.5rem] py-2 shadow-inputShadow text-lg font-lato">
              Sign up{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ffl;
