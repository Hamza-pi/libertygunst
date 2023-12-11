import NotificationTable from "../components/NotificationTable"

const AdminUsers = () => {
  return (
    <div className="font-raleway flex flex-col gap-y-[2rem] lg:w-[80%] w-[100%] py-[2rem] 2xl:py-[4rem]">
      <div className="bg-adminBg rounded-3xl py-[1.5rem]">
        <h1 className="text-primary_blue font-bold sm:text-[2rem] text-[1.5rem] pl-[3rem] pb-[2rem]">
          Notifications
        </h1>
        <NotificationTable />
      </div>
    </div>
  );
};

export default AdminUsers;
