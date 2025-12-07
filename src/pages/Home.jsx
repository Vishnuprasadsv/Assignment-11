import { NavLink } from 'react-router-dom'




const Home = () => {
  return (
    <>
    
        <div className='flex flex-col items-center justify-center h-[50vh] gap-2 mt-[100px]'>

          <h1 className='text-7xl font-black text-gray-800 text-center'>
            Welcome to the <span className='text-blue-700'> User</span> <br />
             <span className='text-blue-700'> Data Center</span>
          </h1>

            <p className='max-w-4xl mx-auto mt-[50px] text-[20px] text-center'>
              This application demonstrates routing logic, parameter handling, and component composition in React. Explore our features below. View Users
            </p>

        </div>
          <div className='flex items-center justify-center gap-[120px]'>
            <div className='h-[55px] w-[140px] bg-blue-800 flex items-center justify-center pl-2 rounded-lg cursor-pointer'>
            <NavLink to='/users' className='  text-2xl text-white font-light gap-2 flex  items-center'>
               Users
            </NavLink>
            </div>

            <div className='h-[55px] w-[180px] bg-gray-200 flex items-center justify-center pl-2 rounded-lg outline-2 outline-skate-500/50 cursor-pointer'>
            <NavLink to='/about' className='  text-2xl text-black font-light gap-2 flex items-center justify-center'>
               Learn More
            </NavLink>
            </div>
          </div>
    
    </>
  )
}

export default Home