import { Link } from "react-router-dom";
const UserTable = () => {
  return (
    <div className="relative overflow-x-auto font-raleway">
      <table className="w-full text-sm text-center rtl:text-right text-[#464646]">
        <thead className="text-xl text-primary_blue capitalize">
          <tr>
            <th scope="col" className="px-6 py-3">
              Account Name
            </th>
            <th scope="col" className="px-6 py-3">
              Received on
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <tr key={i} className="border-b border-white">
              <td className="px-6 py-4">Steller B</td>
              <td className="px-6 py-4">29 Augest 2023</td>
              <td className="px-6 py-4">SN</td>
              <td className="px-6 py-4 text-white font-medium flex items-center justify-center">
                <div className=" bg-[#52FF00] px-4 py-2 rounded-full">
                  Approved
                </div>
              </td>
              <td className="px-6 py-4">
                <Link
                  to="/admin-panel/listings"
                  className="font-semibold text-primary_blue"
                >
                  View Listing
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
