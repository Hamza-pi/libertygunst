import { Link } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";

const UserTable = () => {
  return (
    <div className="relative overflow-x-auto font-raleway">
      <table className="w-full text-sm text-right rtl:text-right text-[#59676A]">
        <thead className="text-xl text-primary_blue capitalize">
          <tr>
            <th scope="col" className="px-6 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <tr key={i} className="border-b border-white">
              <td className="px-6 pl-[3rem] py-4 flex items-center gap-x-[1rem]">
                <IoMailOutline className="text-[2.5rem]" />
                <div className="flex items-center">
                  <Link to="/admin-panel/chat" className="text-primary_blue font-bold">
                    <h3>Erfan Rezaii</h3>
                  </Link>
                  &nbsp;
                  <p>send you a message</p>
                </div>
              </td>
              <td className="px-6 py-4 font-bold">1hr ago</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
