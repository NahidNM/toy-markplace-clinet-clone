import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Vortex } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
const location = useLocation(); 
// console.log(location)
if(loading){
    return  <h1 className='flex items-center justify-center text-2xl font-semibold md:my-20'>
        <Vortex
  visible={true}
  height="100"
  width="100"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/></h1>
}
   if(user){
    return children;
   }
   return <Navigate state={{from: location}} to="/login"  replace></Navigate>
};

export default PrivateRoute;