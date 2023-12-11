import ProfileImg from "../components/ProfileImg";
const Profile = () => {
  return (
    <div className="py-[3rem] font-inter">
      <ProfileImg />
      <form className="lg:w-[40%] sm:w-[60%] w-[80%] mx-auto pt-[3rem] flex flex-col gap-y-4">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-base font-semibold text-[#161616] bg-transparent border-0 border-b-2 border-[#C8C8C8] appearance-none outline-none"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-xl text-[#7C7C7C]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-base font-semibold text-[#161616] bg-transparent border-0 border-b-2 border-[#C8C8C8] appearance-none outline-none"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-xl text-[#7C7C7C]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-base font-semibold text-[#161616] bg-transparent border-0 border-b-2 border-[#C8C8C8] appearance-none outline-none"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-xl text-[#7C7C7C]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email Address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-base font-semibold text-[#161616] bg-transparent border-0 border-b-2 border-[#C8C8C8] appearance-none outline-none"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-xl text-[#7C7C7C]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone Number
          </label>
        </div>
       
        <button
          type="submit"
          className="text-white bg-primary_blue outline-none rounded-md text-lg font-semibold w-full px-5 py-2.5 text-center"
        >
          Edit Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
