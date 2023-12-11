import { useState, useRef } from "react";
import { FaUser } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

const ProfileImg = () => {

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
    <div className="flex items-center justify-center">
      <div className={`border border-[#646464] rounded-full relative ${image?'p-0':'p-14'} flex items-center justify-center`}>
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="rounded-full object-cover"
            style={{ width: "10rem", height: "10rem" }}
          />
        ) : (
          <FaUser className="sm:text-[8rem] text-[3rem] text-primary_blue" />
        )}
        <div
          className="absolute top-[70%] right-0 border border-[#646464] rounded-full flex items-center justify-center p-2 bg-white"
          onClick={handleEditClick}
        >
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <MdEdit className="text-[1.5rem] text-primary_blue" />
        </div>
      </div>
    </div>
  );
};

export default ProfileImg;
