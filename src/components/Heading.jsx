const Heading = ({ title, underlineWidth, underlineHeight, fontSize }) => {
  const underlineStyle = {
    width: underlineWidth ? `${underlineWidth}rem` : "1rem",
    height: underlineHeight ? `${underlineHeight}rem` : "0.5rem",
  };

  return (
    <div className="flex flex-col gap-y-3">
      <h2
        className={` text-textGrey ${
          fontSize ? `text-[${fontSize}rem]` : "text-5xl"
        } font-extrabold px-[.3rem]`}
      >
        {title}
      </h2>
      <div className=" bg-primary_blue" style={underlineStyle}></div>
    </div>
  );
};

export default Heading;
