import UserTable from "../components/UserTable";

const Admin = () => {
  return (
    <div className="font-raleway flex flex-col gap-y-[2rem] lg:w-[80%] w-[100%] py-[2rem] 2xl:py-[4rem]">
      {/* Banner */}
      <div className="banner flex sm:flex-row flex-col items-center justify-between bg-adminBg rounded-3xl xl:px-[2rem] px-[1rem] py-[1rem] gap-[1rem]">
        <div className="text xl:w-[60%] sm:w-[75%] w-[100%] flex flex-col xl:gap-y-[2rem] gap-y-[1rem]">
          <h1 className="text-primary_blue font-bold sm:text-[2rem] text-[1.5rem]">
            Welcome Back
          </h1>
          <p className="#464646 text-[1rem] sm:leading-9 leading-8">
            With a special premium account, you can do very interesting things!
            By purchasing this account, special features will be activated for
            you that you will be amazed to see!
          </p>
        </div>
        <div className="img">
          <img
            src="/images/adminbanner.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      {/* Table */}
      <div className="bg-adminBg rounded-3xl py-[1.5rem]">
        <UserTable />
      </div>
    </div>
  );
};

export default Admin;
