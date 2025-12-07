import homeimg from "../assets/home.png";
import aboutimg from "../assets/about.png";
import usersimg from "../assets/users.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activestl = {
    fontWeight: "bold",
    color: "white",
    
  };
  return (
    <>
      <div className="h-[60px] w-screen bg-linear-to-bl from-violet-500 to-fuchsia-500">
        <div className="flex items-center justify-between px-[90px]">
          <div className="text-[#D9D9D9] text-3xl font-bold pt-2">
            User Data 
           <span className="font-semibold"> Center </span>
          </div>

          <div className="flex justify-center items-center gap-[60px] pt-2">
            <NavLink className="text-gray-200 font-bold text-[24px] flex items-center justify-center gap-2 cursor-pointer hover:scale-108 duration-200 ease-in-out" to="/"
            style={({isActive}) => (isActive ? activestl : {})}>
              <img src={homeimg} alt="home" /> Home
            </NavLink>

            <NavLink className="text-[#D9D9D9] font-bold text-[24px] flex items-center justify-center gap-2 cursor-pointer hover:scale-108 duration-200 ease-in-out" to="/about"
            style={({isActive}) => (isActive ? activestl : {})}>
              <img src={aboutimg} alt="about" /> About
            </NavLink>

            <NavLink className="text-[#D9D9D9] font-bold text-[24px] flex items-center justify-center gap-2 cursor-pointer hover:scale-108 duration-200 ease-in-out" to="/users"
            style={({isActive}) => (isActive ? activestl : {})}>
              <img src={usersimg} alt="users" /> Users
            </NavLink>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
