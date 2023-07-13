import React from 'react';
import { Link } from 'react-router-dom';

const Avenger = (props) => {
    
    const {_id, name, img, price, rating} = props.avenger;
    console.log(_id)
    
    return (
        
        <div data-aos="zoom-in-up" className="shadow-xl card bg-slate-200 ">
<figure className="pt-5 ">
<img src={img} alt="Shoes" className=" rounded-xl" />
</figure>
<div className="items-center font-semibold text-center card-body">
<h2  className=" card-title">Name : {name}</h2>
<p>Price : {price}</p>
<p>Rating : {rating}</p>
<div className="card-actions">
<Link to={`/toydetails/${_id}`}>
        <button className='btn-accent-focus btn'>view details</button>
 </Link>
</div>
</div>
</div>

    );
};

export default Avenger;