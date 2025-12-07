const About = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="h-[80vh] w-[60.1vw] shadow-xl/20 mt-[50px] rounded-2xl">
          <div className="h-[20vh] w-[60vw] border-2 border-black bg-black rounded-t-xl flex justify-center flex-col pl-4 gap-2">
            <h3 className="font-bold text-4xl text-white">
              About this Project
            </h3>
            <p className="text-gray-200 text-[20px]">Assignment Details</p>
          </div>
          <div className="flex flex-col justify-center max-w-[50vw] pl-6 mt-6">
            <p className="text-slate-700 text-[16px]">
              This project is a multi-page React application built with React
              Router that fetches live user data from an API and allows
              navigation between Home, About, Users, and individual User Detail
              pages.
            </p>

            <div className="mt-[30px]">
              <span className="text-2xl font-bold mt-[30px]">
                Key Features Implemented:
              </span>

              <div className="mt-5 flex flex-col justify-center gap-[30px]">
                <div className="flex items-center gap-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                  <p>
                    Multi-page navigation using React Router with routes for
                    Home, About, Users, and User Detail
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                <p>
                  Dynamic API fetching from jsonplaceholder.typicode.com to
                  display real user data.
                </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                <p>
                  Parameterized routing (/users/:id) to load individual user
                  details.
                </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                <p>
                  Reusable components (Navbar, Home, About, Users, UserDetail)
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
