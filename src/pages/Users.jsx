import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let dataList = await response.json();

      setData(dataList);
    };
    userData();
  }, []);

  const profilePic = [
    { profile: "https://avatar.iran.liara.run/public/14", id: 1 },
    { profile: "https://avatar.iran.liara.run/public/34", id: 2 },
    { profile: "https://avatar.iran.liara.run/public/13", id: 3 },
    { profile: "https://avatar.iran.liara.run/public/39", id: 4 },
    { profile: "https://avatar.iran.liara.run/public/5", id: 5 },
    { profile: "https://avatar.iran.liara.run/public/16", id: 6 },
    { profile: "https://avatar.iran.liara.run/public/11", id: 7 },
    { profile: "https://avatar.iran.liara.run/public/48", id: 8 },
    { profile: "https://avatar.iran.liara.run/public/17", id: 9 },
    { profile: "https://avatar.iran.liara.run/public/6", id: 10 },
  ];

  const mapPic = profilePic.map((profileImage, index) => {
    return profileImage.profile;
  });
  return (
    <>
      <div className="mt-5 ">
        <NavLink
          to="/"
          className="text-[18px] text-blue-700 cursor-pointer ml-[60px] hover:text-red-500 "
        
        >
          &#x2190; Go back to Home
        </NavLink>

        <div className="text-xl text-slate-600 ml-[82px] mt-10">
          Select a user to view their detailed profile
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[30px] ml-[180px] mt-[45px] mb-[50px]">
        {data.map((UserDetails, index) => {
          return (
            <NavLink to={`/users/${UserDetails.id}`} className="h-40 w-[520px] border-3 border-gray-200 hover:border-blue-200 hover:scale-103 hover:shadow-xl/30 duration-400 ease-in-out rounded-2xl flex items-center justify-around cursor-pointer group  " key={UserDetails.id}>
              <div className="h-[125px] w-[125px] rounded-full border-3 border-slate-300 group-hover:border-blue-300">
                <img
                  src={mapPic[index]}
                  alt="profile image"
                  className="w-[125px]"
                />
              </div>

              <div className="">
                <div className="text-2xl font-black text-slate-700">{UserDetails.name}</div>
                <div className="text-[20px] font-semibold text-slate-600">"{UserDetails.username}"</div>
                <div className="text-slate-500 group-hover:text-blue-400">{UserDetails.email}</div>
              </div>

              <div className="text-[40px] text-gray-500 group-hover:scale-140  group-hover:text-blue-500 ">&#129174;</div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Users;
