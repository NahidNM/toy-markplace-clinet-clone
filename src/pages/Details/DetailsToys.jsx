import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailsToys = () => {

    const details = useLoaderData()
    // console.log(details)
    const {name, _id, price, addedBy, quantity,  img, category, description} = details;
    
    return (
        <div className='md:m-20'>
            <h1 className='my-5 text-4xl font-semibold text-center'>{name} toy Details</h1>
            <div className="mx-auto shadow-xl card w-96 bg-base-100">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name : {name}</h2>
    <p>Category : {category}</p>
    <p>Seller-Name : {addedBy}</p>
    <p>Price : {price}</p>
    <p>Quantity : {quantity}</p>
    <p>Descriptin : {description}</p>
    <div className="justify-end card-actions">
      <Link to='/'><button className="btn btn-primary">Back</button></Link>
    </div>
  </div>
</div>
</div>
 
      
    );
};

export default DetailsToys;