import React, { useEffect, useState } from 'react';
import AllToysTable from './AllToysTable';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
AuthContext
import { FaSearch } from 'react-icons/fa';
import { Dna } from 'react-loader-spinner'

const AllToys = () => {
    const { loading } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [data, setData] = useState(toys);
   
 
 useEffect(()=>{
    fetch('https://toy-marketplace-server-beta-one.vercel.app/alltoys')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setToys(data)
        setData(data)
    })
 },[])
//  console.log(alldatas)

const [limit,setLimit]=useState(20)
const handleLimit=()=>{
    setLimit(toys.length)
}

const handlelowLimit=()=>{
    setLimit(20)
}

const filter = (event) => {
    setData(
      toys.filter((toy) =>
        toy.name.toLowerCase().includes(event.target.value)
      )
    );
  };

  if(loading){
    return <div className='flex justify-around'><Dna
    visible={true}
    height="100"
    width="180"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  /></div>
}

    return (
      <div className='md:my-10'> 
      
      <div className="relative md:mx-16 md:-right-96 ">
        <div className="flex items-center my-3 bg-stone-400 rounded-xl md:mx-96">
          <input
            className="py-2 pl-2 my-2 md:mx-2 md:pr-24 rounded-xl "
            onChange={filter}
            type="text"
            placeholder="Search"
          />
          <button>
            <FaSearch color="#F7E1AE" size={30} className="md:mx-2" />
          </button>
        </div>
      </div>
      
       
<div className='grid grid-cols-5 font-bold text-white md:text-2xl md:py-4 bg-slate-600 rounded-xl'>
       <div className='text-center'>
        <h1>Toys</h1>
       </div>
       <div className='text-center'>
        <h1>Price</h1>
       </div>
       <div className='text-center'>
        <h1>Qauntity</h1>
       </div >
       <div className='text-center'>
        <h1>Seller</h1>
       </div>
       <div className='text-center'>
        <h1>Details</h1>
       </div>
       </div>
            {
                data?.slice(0,limit).map(alldata => 
                   <AllToysTable key={alldata._id}
                   alldata={alldata}
                   ></AllToysTable>
                )
            }
          
            
            <div className="flex justify-around">
        {limit==20?<button className="my-4 btn btn-accent-focus " onClick={handleLimit}>view all toys</button>:
        <button className="my-4 btn btn-accent-focus " onClick={handlelowLimit}>view less</button>}
      </div>
            
        </div>

        
    );
};

export default AllToys;