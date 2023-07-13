import React from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const AddToys = () => {
  
  const {user} = useContext(AuthContext);
  // console.log(user)
  
  const handleAddToy = event =>{
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const addedBy = form.seller.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const img = form.photo.value;
    const rating = form.rating.value;
    const description = form.description.value;
    
    const addtoys = {name, img, addedBy, email,  price, quantity, rating, description, category  }
   console.log(addtoys);
   
   fetch("https://toy-marketplace-server-beta-one.vercel.app/addToys", {
    method: "POST",
  headers: {
    "content-type" : "application/json"
  },
  body: JSON.stringify(addtoys)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.insertedId){
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Toy data added succesfull',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
    
  }
  

  
    return (
        <div data-aos="zoom-in-up" className='px-5 py-8 md:m-10 bg-slate-400'>
           <h1 className='my-5 text-2xl font-semibold text-center'>Add New Toy Data</h1> 
           
     <form onSubmit={handleAddToy} className='max-w-5xl mx-auto'>
         
          <div className='grid gap-5 md:grid-cols-2'>
            
          <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text">Name : </span>
  </label>
  <label className=" input-group">
    <input type="text" name='name' placeholder="name" required className="w-full border-x-pink-950 input input-bordered" />
    
  </label>
</div>
           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Seller Name : </span>
  </label>
  <label className="input-group">
    <input type="text" name='seller' placeholder="seller name" required className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>
           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Seller Email :</span>
  </label>
  <label className="input-group">
    <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>
  
<div>
<label className="label">
    <span className="text-xl font-medium label-text ">Sub-category :</span>
  </label>
<select name='category' className="w-full max-w-xs select select-secondary">
  <option disabled selected>Category</option>
  <option>Superheroes</option>
  <option>Avenger</option>
  <option>Star wars</option>
  <option>Marvel</option>
  <option>Transformers</option>
</select>
</div>

           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Price : </span>
  </label>
  <label className="input-group">
    <input type="Number" name='price' placeholder="price"  required className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>
           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Quantity : </span>
  </label>
  <label className="input-group">
    <input type="Number" name='quantity' placeholder="quantity" required className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>
           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Rating : </span>
  </label>
  <label className="input-group">
    <input type="Number" name='rating' placeholder="rating" required className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>
           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Description : </span>
  </label>
  <label className="input-group">
    <textarea  name='description'  className="w-full textarea textarea-secondary" placeholder="descrotion"></textarea>
  </label>
</div>
            
          </div>
          
          <div className=" form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Photo URL : </span>
  </label>
  <label className="input-group">
    <input type="text" name='photo' placeholder="Enter photo url" className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>

<div className=''>
              <button className='flex items-center px-5 py-2 mx-auto my-3 text-xl font-semibold text-center bg-orange-400 border rounded-lg border-stone-500 hover:bg-red-400'>Submit</button>
              </div>
           </form>
        </div>
    );
};

export default AddToys;