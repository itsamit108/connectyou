import logo from "@/public/favicon.ico";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Link as SLink } from "react-scroll";

const LandingFooter = () => {
  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse"></div>
      <div className="h-[66vh] md:h-auto w-full bg-gradient-to-b from-c1 via-c2 to-c1 text-white flex flex-col items-center
        justify-between overflow-hidden">
        <div className="w-full h-[65%] md:w-7/12 md:h-[40vh] flex flex-col lg:flex-row gap-5 justify-center items-center mt-8">
          <div className="w-[50%] h-full flex flex-col items-center justify-center gap-5 ">
            <div className="hidden lg:flex gap-1 text-4xl font-semibold items-center cursor-default">
              <Image src={logo} alt="ConnectYouLogo" height={68} width={68} />
              ConnectYou
            </div>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full cursor-pointer p-[1px] transition duration-300 transform hover:scale-105">
              <SLink to="home" smooth={true} offset={-100}>
                <div className="flex items-center justify-center p-3 gap-3 text-white font-semibold bg-c1 whitespace-nowrap h-full rounded-full">
                  <MdKeyboardDoubleArrowUp className="text-3xl" />
                </div>
              </SLink>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center my-5 cursor-default">
          <div className="h-[1px] w-7/12 bg-c3"></div>
          <p className="font-light p-4">
            Made by Team
            <span className="font-semibold"> ConncetYou </span> | &copy; 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingFooter;
