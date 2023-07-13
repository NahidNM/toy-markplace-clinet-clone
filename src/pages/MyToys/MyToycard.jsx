import React from 'react';
import { RiDeleteBin6Line, RiEdit2Fill } from "react-icons/ri";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const MyToycard = (props) => {
    
    
    const {name, _id, price, addedBy, quantity,  img, category,} = props.toy;
  const handleDelete=props.delete

    return (
       
      <div data-aos="flip-down" className="grid grid-cols-5 py-4 my-5 bg-stone-300 rounded-xl">
        <div className="flex items-center pl-5">
          <img src={img} className="w-20 h-20 rounded-lg" />
          <div className="px-2">
            <h1 className="text-xl font-semibold">{name}</h1>
            <div className="text-lg badge badge-outline">{category}</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-semibold text-center">${price} </h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-semibold text-center">{quantity}</h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-semibold text-center">{addedBy}</h1>
        </div>
        
        <div className="flex items-center justify-center mx-auto">
            
         {/* Handle Update toy */}
        <Link to={`/update/${_id}`}>
        <button  className="mx-3 btn btn-accent-focus">
          <RiEdit2Fill size={20} />
          </button></Link>
          
          {/* Handle Delete toy */}
          <button onClick={()=>handleDelete(_id)} className="md:mx-3 btn btn-accent-focus">
            <RiDeleteBin6Line size={20} />
          </button>
          
        </div>
      </div>
    );
};

export default MyToycard;