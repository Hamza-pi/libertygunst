import UserListing from "../components/UserListing";

const AdminUsers = () => {
  return (
    <div className="font-raleway flex flex-col gap-y-[2rem] lg:w-[80%] w-[100%] py-[2rem] 2xl:py-[4rem]">
      <div className="bg-adminBg rounded-3xl py-[1.5rem]">
        <h1 className="text-primary_blue font-bold sm:text-[2rem] text-[1.5rem] pl-[4rem] pb-[2rem]">
          Stellar B
        </h1>
        <div className="flex flex-col gap-y-[1.5rem] px-[2rem]">
        {
            [1,2,3,4,5].map((item,i)=>(
                <UserListing key={i}/>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
