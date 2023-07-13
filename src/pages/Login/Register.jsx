// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import cycle from './../../../public/img/World Bicycle Day.gif'



const Register = () => {
    
    const { createUser, updateUser, setReload } = useContext(AuthContext);
    
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || "/login";
    
    const handleRegister = event =>{
        event.preventDefault();
        
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        
        // console.log(name, photo, email, password)
        
        if(password.length < 6){
            setError("Please add at least 6  characters")
        }
        else{
            setPasswordError("")
        }
        
        createUser(email, password)
        .then((result) => {
           
            const createdUser = result.user;
            console.log(createdUser)
            updateUser(name,photo)
            .then(()=>{
                setReload(Date.now())
            }) 
            setError("");
            form.reset(); 
            
            navigate(from, {replace: true})
            
          })
          .catch((error) => {
           console.log(error.message)
        
          });
        }
        
        const handlePassword = event =>{
            const passwordInput = event.target.value;
            setPassword(passwordInput);
            if(passwordInput.length < 6 ){
                setPasswordError("password must be 6 characters")
                
            }
            
            else{
                setPasswordError("")
            }
        }
    
    return (
             <div className='grid w-full my-12 md:grid-cols-2 '>
            
            <div data-aos="fade-right" className='m-5'>
                <img className='' src={cycle} alt="" />
            </div>
           
         <div data-aos="fade-left" className='h-full p-10 mx-auto border-2 border-indigo-600 border-solid rounded-lg bg-slate-400'>
            <h1 className='mb-5 text-4xl font-semibold text-center'>Please Register Account</h1>
            <form onSubmit={handleRegister}>
            <h1 className='text-xl font-semibold'>Name :</h1>
            
                <input className='w-full px-5 py-2 my-3 border rounded-lg border-stone-500' name='name' type="text" placeholder='Enter Name' required /><br />
                
                <h1 className='text-xl font-semibold'>Email :</h1>
                
                <input className='w-full px-5 py-2 my-3 border rounded-lg border-stone-500' name='email' type="email" placeholder='Enter Email' required/> <br />
                
                <h1 className='text-xl font-semibold'>Password :</h1>
                
                
               
               <input onChange={handlePassword}  className='w-full px-5 py-2 my-3 border rounded-lg border-stone-500'  
               name='password' type='password' id='password' 
               value={password}   placeholder='Enter password'   required/> <br />
               {
                passwordError && <span className='text-blue-700'>{passwordError}</span>
               }
                
                <h1 className='text-xl font-semibold'>Photo URL :</h1>
                
                <input className='w-full px-5 py-2 my-3 border rounded-lg border-stone-500' name='photo' type="text" placeholder='Enter Photo url' required/>
                
              <div>
              <button className='w-full px-5 py-2 my-3 text-xl font-semibold bg-orange-400 border rounded-lg border-stone-500'>Register</button>
              </div>
            </form>
            <div>
                <h1 className='text-xl'>Already Have an Account ?<Link to='/login' state={location.state}> <span className='text-blue-700'>Login</span></Link></h1>
                <h1 className='text-blue-700'>{error}</h1>
                </div>
                
         </div>
        
        </div>
       
    );
};

export default Register;