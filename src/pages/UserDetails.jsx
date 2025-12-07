import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  const [userDatas, setUserDatas] = useState([]);

  useEffect(() => {
    const userDataDetails = async () => {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      let userList = await response.json();

      setUserDatas(userList);
    };
    userDataDetails();
  }, [id]);


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

  // finding the picture from the array by matching the id
  const profile = profilePic.find((pic) => pic.id == id);

  return (
    <>
      <div className="flex items-center justify-center h-[90vh] ">
        <div className="h-150 w-150 shadow-2xl/50 rounded-2xl p-[30px]">
          <div className="flex items-center gap-[30px]">
            <div className=" border-4 border-red-200 rounded-full">
              <img
                src={profile?.profile}
                alt="profile image"
                className="w-[125px]"
              />
            </div>

            <div className="">
            <div className="text-3xl text-slate-800 font-black">
              {userDatas.name}
            </div>

            <div className="font-semibold">{userDatas.username}</div>
          
            <div className="h-[25px] w-fit bg-blue-100 text-blue-800 font-semibold rounded-2xl px-4 mt-3">💼 {userDatas?.company?.bs}</div>

            </div>

          </div>

          <div className="h-px w-[540px] bg-gray-200 mt-[30px]"></div>

          <div>

              <div className="flex flex-col mt-5">
                <span className="font-bold text-gray-400">EMAIL ADDRESS</span>
                <span className="font-semibold ">{userDatas.email}</span>
              </div>
              <div className="flex flex-col mt-5">
                <span className="font-bold text-gray-400">ABOUT</span>
                <span className="font-semibold ">{userDatas?.company?.catchPhrase}</span>
              </div>
              <div className="flex flex-col mt-5">
                <span className="font-bold text-gray-400">ADDRESS</span>
                <span className="font-semibold ">{userDatas?.address?.street},  {userDatas?.address?.city}, {userDatas?.address?.zipcode}  </span>
              </div>
              <div className="flex flex-col mt-5">
                <span className="font-bold text-gray-400">MOBILE</span>
                <span className="font-semibold "> {userDatas.phone}</span>
              </div>

          </div>

          <div className="flex items-center justify-center mt-[50px]">

          <NavLink to='/users'>
            <button className="h-10 w-[140px] rounded-md bg-blue-400 font-bold cursor-pointer hover:scale-106 duration-200 ease-in-out hover:bg-blue-900 hover:text-gray-100">Back to Users</button>
          </NavLink>
          </div>

        </div>
      </div>
    </>
  );
};

export default UserDetails;
