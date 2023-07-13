

const NewsLetter = () => {
    return (
        <div className='p-16 my-10 space-y-5 bg-sky-400'>
        <h1 className='text-4xl font-semibold text-center text-white'>Sign up for our newsletter</h1>
        <p className='text-lg font-semibold text-center text-white'>Sign up today for our newsletter and receive <span className='text-red-600'>15% OFF</span> your first purchase, and also get our sneak peeks, tips, and exclusive offers.</p>

        <div className='flex justify-center'>
        <input type="text" className="w-1/2 ps-5 file-input file-input-bordered file-input-warning" placeholder='Enter your email' />
        </div>
        <div className='flex justify-center'>
        <button className="text-white btn-wide btn hover:btn-warning">SUBSCRIBE</button>
        </div>

        
    </div>
    );
};

export default NewsLetter;