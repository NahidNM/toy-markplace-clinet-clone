import React from 'react';

const Banner = () => {
    return (
        <div data-aos="flip-down" className="w-full min-h-screen mb-5 hero" style={{ backgroundImage: `url("https://i.ibb.co/GHtr9pC/download-1.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content ">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">One Box Toy</h1>
            <p className="mb-5">A kids toy shop is a store that specializes in selling toys and games designed specifically for children.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;