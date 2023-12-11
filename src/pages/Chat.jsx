import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAttachment } from "react-icons/md";
import { VscSend } from "react-icons/vsc";
import { AiOutlineMenu } from "react-icons/ai";

const Chat = () => {
  const [active, setActive] = useState(0);
  const [open,setOpen] = useState(false)

  return (
    <div className="pb-[1rem] sm:p-[.5rem] lg:p-[2rem] 2xl:px-[10rem] 2xl:py-[3rem] font-lato flex items-start lg:gap-x-[.8rem] gap-x-0 lg:static relative">
      {/* Menu Icon for small screen */}
      <div className="text-primary_blue text-xl cursor-pointer lg:hidden block px-[1rem] py-[1.64rem] bg-[#131313] absolute sm:right-10 right-0" onClick={()=>setOpen(!open)}>
        <AiOutlineMenu />
      </div>
      {/* My Chats */}
      <div className={`lg:w-[30%] sm:w-[60%] w-[80%] lg:bg-none bg-white lg:p-0 p-6 lg:h-auto max-h-screen overflow-y-scroll lg:rounded-none rounded-md lg:shadow-none shadow-xl lg:static absolute top-20 right-0 lg:flex ${open?'block':'hidden'} flex-col sm:gap-y-[.5rem] gap-y-[2rem]`}>
        <h3 className="font-[500] sm:text-[2rem] text-[1.5rem]">My Chats</h3>
        <ul className="flex flex-col gap-y-[.5rem]">
          {[1, 2, 3, 4,].map((item, i) => (
            <li
              key={i}
              className={`${
                active === i ? "bg-primary_blue" : "bg-[#131313]"
              } text-white lg:py-[1.2rem] py-[.5rem] lg:px-[.8rem] px-[.3rem]`}
            >
              <Link to="/chat" onClick={() =>{ setActive(i);setOpen(false)}}>
                <div className="flex lg:items-start items-center lg:gap-x-[.8rem] gap-x-[.3rem]">
                  <div
                    className={`image ${
                      active === i ? "bg-white" : "bg-[#2D2D2D]"
                    } lg:rounded-md rounded-full p-2 lg:w-auto w-[50px]`}
                  >
                    <img
                      src="/images/userchat.png"
                      className="lg:max-w-[50px]  object-cover "
                      alt="user"
                    />
                  </div>
                  <div className="user_info flex flex-col gap-y-[.2rem] item-start">
                    <h3 className=" font-semibold">Robert Downy</h3>
                    <p className="text-xs pr-[1rem] sm:block hidden">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin tincidunt arcu tristique lacinia hendrerit. Nulla
                      facilisi.
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Chat Room */}
      <div className="lg:w-[70%] w-[100%]">
        {/* Top Bar */}
        <div className="user_info flex items-center bg-[#131313] gap-x-[.8rem] text-white sm:px-[2rem] px-[.8rem] py-[.4rem]">
          <div className="profile_img bg-primary_blue p-1 rounded-full">
            <img src="/images/userchat.png" className="w-[50px]" alt="user" />
          </div>
          <p>Robert Downy</p>
        </div>
        <div className="chats py-[2rem] w-full flex flex-col gap-y-[1.5rem] max-h-[100vh] overflow-y-scroll sm:px-0 px-[.5rem]">
          {[1, 2, 3].map((item, i) => (
            <>
              <div className="other_user flex items-start justify-end sm:max-w-[70%] max-w-[80%] sm:ml-[30%] ml-[20%] gap-x-[.5rem]">
                <div className="bg-[#131313] text-white rounded-r-3xl rounded-bl-3xl sm:px-[1.5rem] px-[1rem] sm:py-[1rem] py-[.5rem] shadow-lg">
                  <p className="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tincidunt arcu tristique lacinia hendrerit. Nulla
                    facilisi.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
                <div className="profile_img bg-primary_blue p-1 rounded-full">
                  <img
                    src="/images/userchat.png"
                    className="sm:w-[80px] w-[120px]"
                    alt="user"
                  />
                </div>
              </div>
              <div className="current_user flex items-start sm:max-w-[70%] max-w-[80%] gap-x-[.5rem]">
                <div className="profile_img bg-primary_blue p-1 rounded-full">
                  <img
                    src="/images/userchat.png"
                    className="sm:w-[80px] w-[120px]"
                    alt="user"
                  />
                </div>
                <div className="bg-primary_blue text-white rounded-r-3xl rounded-bl-3xl sm:px-[1.5rem] px-[1rem] sm:py-[1rem] py-[.5rem] shadow-lg">
                  <p className="sm:text-base text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin tincidunt arcu tristique lacinia hendrerit. Nulla
                    facilisi.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="chat_box flex items-center justify-between text-primary_blue gap-x-4 lg:pr-6 sm:px-0 px-[.5rem]">
          <textarea
            style={{resize:'none'}}
            rows={1}
            cols={1}
            type="text"
            placeholder="Enter your message"
            className="bg-[#131313] rounded-full sm:px-[1.5rem] px-[1rem] sm:py-[1rem] py-[.5rem] w-[85%] sm:text-xl text-lg text-[#AFAFAF] outline-none overflow-hidden"
          />
          <div className="icons flex items-center gap-x-2">
            <div className="border-[3px] border-primary_blue rounded-full sm:text-4xl text-3xl sm:p-2 p-1 cursor-pointer hover:bg-primary_blue hover:text-white transition-all delay-150 ease-in-out">
              <MdOutlineAttachment />
            </div>
            <div className="border-[3px] border-primary_blue bg-primary_blue text-white rounded-full text-3xl sm:p-3 p-1 cursor-pointer hover:bg-white hover:text-primary_blue transition-all delay-150 ease-in-out">
              <VscSend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
