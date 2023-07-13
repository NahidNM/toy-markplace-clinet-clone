import React from 'react';

import gallery1 from './../../../../public/img/g1.webp'
import gallery2 from './../../../../public/img/g2.webp'
import gallery3 from './../../../../public/img/g3.webp'
import gallery4 from './../../../../public/img/g4.webp'

import gallery5 from './../../../../public/img/g5.webp'
import gallery6 from './../../../../public/img/g6.webp'
import gallery7 from './../../../../public/img/g7.webp'
import gallery8 from './../../../../public/img/g8.webp'

const Galllery = () => {
    return (
        <div data-aos="zoom-in-up" className='my-5'>
            <h1 className='my-5 mt-5 mb-3 text-2xl font-medium text-center'>Toys Gallery......</h1>
            <div className='grid grid-cols-1 text-center md:grid-cols-4 md:mx-10'>
            <div className="shadow-xl card bg-base-100">
  <figure><img src={gallery1} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">#20,070 <br /> TOY CREATOR: Alin</h2>
  </div>
</div>
            <div className="shadow-xl card bg-base-100">
  <figure><img src={gallery2} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">#20,070 <br /> TOY CREATOR: Riah</h2>
  </div>
</div>
            <div className="shadow-xl card bg-base-100">
  <figure><img src={gallery3} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">#20,070 <br /> TOY CREATOR: Azah</h2>
  </div>
</div>
            <div className="shadow-xl card bg-base-100">
  <figure><img src={gallery4} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">#30,070 <br /> TOY CREATOR: zariah</h2>
  </div>
</div>
            <div className="shadow-xl card bg-base-100">
  <figure><img src={gallery5} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">#20,070 <br /> TOY CREATOR: Azariah</h2>
  </div>
</div>
            <div className="shadow-xl card bg-base-100">
  <figure><img src={gallery6} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">#20,070 <br />
    TOY CREATOR: Azari</h2>
  </div>
</div>
            <div className="shadow-xl card bg-base-100">
  <figure><img src={gallery7} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">#20,070TOY CREATOR: ariah</h2>
  </div>
</div>
            <div className="shadow-xl card bg-base-100">
  <figure><img src={gallery8} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">#20,070TOY CREATOR: Azah</h2>
  </div>
</div>
        </div>
        </div>
    );
};

export default Galllery;