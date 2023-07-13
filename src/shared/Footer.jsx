import React from 'react';
import { FaFacebook, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import logo from './../../public/img/logo1_compact.webp'

const Footer = () => {
    return (
        
            <div className='bg-slate-900 text-slate-200'>
               
                <div className='grid grid-cols-2 gap-5 p-5 mx-auto md:grid-cols-4'>
                    
                  <div className='ml-5 space-y-4'>
                    <img src={logo} alt="" />
                    <div className='space-y-2 text-sm md:ml-5 text-slate-300'>
                <h1 className='text-2xl'>ACTION TOYS</h1>
                <p>About us</p>
                <p>Terms of Use</p>
                </div>
                    </div> 
                     
                  <div className='space-y-4'>
                  <h1 className='text-2xl'>Social</h1>
                  <div className='space-y-2 text-sm text-slate-300'>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Youtube</p>
                </div>
                <div className='flex items-center gap-4'>
                <a href="https://www.facebook.com/"><FaFacebook className='h-7 w-7'/></a>
                <a href="https://twitter.com/"><FaTwitterSquare className='h-7 w-7'/></a>
                <a href="https://www.youtube.com/"><FaYoutube className='h-9 w-9'/></a>
                
                </div>
                    </div>  
                     
                  <div className='space-y-4'>
                  <h1 className='text-2xl'>Legal</h1>
                  <div className='space-y-2 text-sm text-slate-300'>
                <p>Terms of use</p>
                <p>Privacy policy</p>
                <p>Toys policy</p>
                </div>
                    </div>  
                    
                    <div className='space-y-4'>
                <h1 className='text-2xl '>Contact</h1>
                <div className='space-y-2 text-sm text-slate-300'>
                    <p>Nahid Hasan, Dinajpur</p>
                    <p>+1706-848-010</p>
                </div>
            </div>
                    
                    
                    
                    
                </div>
                <p className='mx-auto text-center text-slate-300'>Copyright © 2023 ToyAction. All Rights Reserved.</p>
            </div>
            
       
        
    );
};

export default Footer;