import {useState} from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["All", "Rifles", "Shotguns", "Ammo", "Pistols", "Accessories"];
  return (
    <div className="tabs">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select Categories
        </label>
        <select
          id="tabs"
          className="block w-full p-2.5 bg-black text-white outline-none"
          onChange={(e) => setActiveTab(e.target.selectedIndex)}
        >
          {tabs.map((tab, i) => (
            <option
              key={i}
              className={activeTab === i ? "bg-primary_blue" : "black"}
            >
              {tab}
            </option>
          ))}
        </select>
      </div>
      <ul className="hidden text-sm font-medium text-center text-white shadow sm:flex">
        {tabs.map((tab, i) => (
          <li className="w-full" key={i}>
            <p
              className={`inline-block cursor-pointer w-full p-4 bg-[#131313] hover:bg-primary_blue border-r border-white ${
                activeTab === i ? "bg-primary_blue" : ""
              }`}
              aria-current="page"
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
