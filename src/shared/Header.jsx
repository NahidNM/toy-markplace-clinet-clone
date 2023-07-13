import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../public/img/logo1_compact.webp'

const Header = () => {
  
  const { user, logOut } = useContext(AuthContext);  
  // console.log(user)
  
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    // LOg out
    const handleLogOut = () =>{
      logOut()
      .then()
      .catch(error =>{
        console.log(error)
      })
    }
    
    return (
        <div className='flex items-center justify-between p-2 rounded-lg md:p-6 bg-slate-500 drap-shadow-2xl'>
            <div className='flex items-center gap-2'>
              <img className='w-8 h-6 md:h-10 md:w-12' src={logo} alt="" />
                <h3 className='font-bold md:text-4xl'>ACTION TOYS</h3>
            </div>
            <ul className='items-center hidden md:text-xl lg:flex space-x-7 text-gray-950'>
                <li>
                <NavLink to='/' className={({isActive})=>(isActive? 'font-medium tracking-wide text-sky-950 transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl': 'hover:text-green-500 font-medium')}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/all-toys" className={({isActive})=>(isActive? 'font-medium tracking-wide text-sky-950 transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl' : 'hover:text-green-500 font-medium')}>All Toys</NavLink>
                </li>
               <li>
               <NavLink to="/blogs" className={({isActive})=>(isActive? 'font-medium tracking-wide text-sky-950 transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl' : 'hover:text-green-500 font-medium')}>Blogs</NavLink>
               </li>
            </ul>
           
            {/* mobile menu */}
            <div className=' lg:hidden'>
              
            <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          
          {isMenuOpen && (
            <div className='absolute z-10'>
              <div className='p-2 border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-2'>
                  <div>
                  <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 font-bold text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <nav>
                  <ul className='space-y-2 text-sm bg-white'>
                  <li>
                <NavLink to='/' className={({isActive})=>(isActive? 'font-medium tracking-wide text-sky-950 transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl ': 'hover:text-green-500 font-medium')}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/all-toys" className={({isActive})=>(isActive? 'font-medium tracking-wide text-sky-950 transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl' : 'hover:text-green-500 font-medium')}>All Toys</NavLink>
                </li>
               {/* <li>
               <NavLink to="/applied" className={({isActive})=>(isActive? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'hover:text-green-500')}>Applied Jobs</NavLink>
               </li> */}
               <li>
               <NavLink to="/blogs" className={({isActive})=>(isActive? 'font-medium tracking-wide text-sky-950 transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl' : 'hover:text-green-500')}>Blogs</NavLink>
               </li>
                  </ul>
                </nav>
                
                </div>  
            </div>
          )}
            </div>
            
           {/* Conditional login */}
           
            <div className='flex items-center gap-2 md:gap-4 md:mx-10 md:text-xl text-gray-950'>
            { 
             user ?<>
            <div className='flex items-center gap-2 '>
              <div className='ml-5'>
              <NavLink to='/my-toys' className={({isActive})=>(isActive? 'font-medium tracking-wide text-sky-950 transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl': 'hover:text-green-500 font-medium')}>My toys</NavLink>
              </div>
              <div>
              <NavLink to='/add-toys' className={({isActive})=>(isActive? 'font-medium tracking-wide text-sky-950 transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl': 'hover:text-green-500 font-medium')}>Add toys</NavLink>
              </div>
            <div className='ml-5 tooltip avatar ' data-tip= {user?.displayName} >
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
         <img src={user?.photoURL}  className=''/>
             </div>
             </div>
            </div>
             </>  : 
             <div className='ml-5'>
             <FaUserCircle size={46}></FaUserCircle>
             </div>
            
              

             }
            
            { user ?
              <NavLink onClick={handleLogOut}><button className='w-full px-2 py-1 text-white bg-blue-600 rounded-md hover:bg-stone-500'>Logout</button></NavLink> : 
              <NavLink to='/login'><button className='w-full px-2 py-1 text-white bg-blue-600 rounded-md hover:bg-stone-500'>Login</button></NavLink>
              
              } 
            </div>
        </div>
    );
};

export default Header;