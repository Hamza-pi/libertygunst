import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
const AdminLayout = () => {
  return (
    <div className="flex lg:flex-row flex-col items-start gap-x-[3rem] lg:px-[2rem] px-[1rem]">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
