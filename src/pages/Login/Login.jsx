import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
   import { FaGithub, FaGoogle } from 'react-icons/fa'; 
   import { AuthContext } from '../../providers/AuthProvider';
   import { useState } from 'react';
   import { useNavigate, useLocation } from 'react-router-dom';
   import cycle from './../../../public/img/World Bicycle Day.gif'
   
   
   const Login = () => {
    
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    
    const navigate = useNavigate();
    const location = useLocation();
    
    const [ showUser, setShowUser] = useState("")
    const [error, setError] = useState("")
    
    const from = location.state?.from?.pathname || "/";
    
    const handleLogIn = event =>{
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser); 
            setShowUser(loggedUser)
            setError('')
            navigate(from, {replace: true})
            form.reset();
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }
    
    // Google LogIn
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const googleUser = result.user;
            navigate(from, {replace: true})
            // console.log(googleUser)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    // GitHub LogIn
    const handleGitubSignIn = () =>{
        githubSignIn()
        .then(result => {
            const githubUser = result.user;
            // console.log(githubUser)
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    return (
        <div className='grid w-full my-12 md:grid-cols-2'>
            <div data-aos="fade-right" className='m-5'>
                <img className='' src={cycle} alt="" />
            </div>
            
         <div data-aos="fade-left" className='h-full px-10 pt-5 mx-auto border-2 border-indigo-600 border-solid rounded-lg bg-slate-400'>
         <h1 className='mb-5 text-4xl font-semibold text-center'>Please Login</h1>
            <form  onSubmit={handleLogIn}>
                <h1 className='text-xl font-semibold'>Email :</h1>
                
                <input className='w-full px-5 py-2 my-3 border rounded-lg border-stone-500'name='email' type="email" placeholder='Enter Email' required/> <br />
                
                <h1 className='text-xl font-semibold'>Password :</h1>
                
                <input className='w-full px-5 py-2 my-3 border rounded-lg border-stone-500'name='password' type="password" placeholder='Enter password' required/>
                
              <div>
              <button className='w-full px-5 py-2 my-3 text-xl font-semibold bg-orange-400 border rounded-lg border-stone-500'>Login</button>
              </div>
            </form>
            <div>
                <h1 className='text-xl'>Don't Have an Account ?<Link to='/register' state={location.state}> <span className='text-blue-700'>Register</span></Link></h1>
            
                </div>
                <div>
                    <h1 className='mb-4 text-2xl font-semibold text-center mt-7'>Login With</h1>
                    
                    <div className='items-center gap-4 mt-2 md:flex'>
                        
                    <button onClick={handleGoogleSignIn}  className='flex items-center gap-2 px-3 py-1 my-2 text-xl font-semibold text-blue-700 bg-white border rounded-lg border-zincflex'><FaGoogle  /> Loing With Google</button>
                    
                    <button onClick={handleGitubSignIn}  className='flex items-center gap-2 px-3 py-1 text-xl font-semibold bg-white border rounded-lg text-sky-600 border-zincflex'><FaGithub/> Loing With github</button>
            
                </div>
         </div>
            </div>
       
        </div>
    );
};

export default Login;