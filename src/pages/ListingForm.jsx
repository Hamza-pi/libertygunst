import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import useScrollToTop from "../hooks/scrollToTop";
import { MdDelete } from "react-icons/md";

const ListingForm = () => {

  useScrollToTop()

  const {id} = useParams()


  const [image, setImage] = useState([]);

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage((prev) => [...prev, e.target.result]);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const handleEditClick = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

  const delImg = (i)=>{
    const images = [...image];
    images.splice(i,1);
    setImage(images)
  }

  const currency = [
    { value: "$", label: "$" },
    { value: "PKR", label: "PKR" },
  ];

  const dropDownStyle = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      border: "none",
      cursor: "pointer",
      background: "#fff",
      borderRadius: "none",
      width:"50px"
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#3F3F3F",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#3F3F3F",
      border: "none",
      margin: "0",
      padding: "0",
    }),
    menu: (provided, state) => ({
      ...provided,
      border:"1px solid #A6A6A6",
      boxShadow: "none",
      color: "#3F3F3F",
      background: "#fff",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused && "#fff",
      color: "#3F3F3F",
    }),
  };

  return (
    <div className="flex flex-col gap-y-[4rem] items-center justify-center py-[4rem] sm:px-[2rem] px-[.5rem]">
      {/* Heading */}
      <div className="flex flex-col gap-y-1">
        <h2
          className={` text-textGrey sm:text-4xl text-4xl font-[900] px-[.3rem]`}
        >
          {id?'Edit Listings':'Upload Listings'}
        </h2>
        <div
          className={`bg-primary_blue mt-[.5rem] ${id?'ml-[70%]':'ml-[80%]'}`}
          style={{ width: "4.3rem", height: ".3rem" }}
        ></div>
      </div>
      {/* Form */}

      <form className="lg:w-[70%] sm:w-[90%] w-[100%] font-lato">
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-base font-medium text-[#4B4B4B]"
          >
            Title
          </label>
          <input
            type="text"
            id="text"
            className="border border-[#A6A6A6] text-[#747474] text-lg rounded-md font-normal block w-full p-2.5 outline-none"
            placeholder="Product Title"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-base font-medium text-[#4B4B4B]"
          >
            Description
          </label>
          <textarea
            id="message"
            rows="4"
            className="border border-[#A6A6A6] text-[#747474] text-lg rounded-md font-normal block w-full p-2.5 outline-none"
            placeholder="Description"
            required
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <div className="mb-6">
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
          <div className="py-[1.5rem] flex flex-wrap items-center justify-start gap-[1rem]">
            {image.map((img, i) => (
              <div
                key={i}
                className="w-[120px] px-2 py-4 border border-[#7D7D7D] relative"
              >
                <MdDelete className="absolute top-2 right-2 text-[#C90000] cursor-pointer" onClick={()=>delImg(i)}/>
                <img src={img} alt="Img" className="w-[80%] mx-auto" />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-base font-medium text-[#4B4B4B]"
          >
            Unit Price
          </label>
          <div className="flex items-center sm:justify-center justify-start border border-[#A6A6A6] rounded-md xl:w-[30%] lg:w-[40%] sm:w-[45%] w-[100%]">
            <Select
              options={currency}
              defaultValue={currency[0]}
              placeholder=" "
              styles={dropDownStyle}
            />
            <input
              type="number"
              className="text-[#747474] text-lg font-normal block p-2.5 outline-none border-none"
            />
          </div>
        </div>
        <div className="submit_btn sm:w-[25%] w-full mx-auto">
          <button
            type="submit"
            className="text-white  bg-primary_blue outline-none rounded-md text-lg font-semibold px-[4rem] py-2.5 text-center"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ListingForm;
