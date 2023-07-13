import { FaRegPaperPlane, FaPhoneAlt, FaGift, FaCreditCard } from 'react-icons/fa';

const FirstSection = () => {
    return (
        <div className='p-10 my-10 rounded-lg shadow-xl'>
            
        <div className='grid grid-cols-1 gap-5 mt-10 align-middle lg:grid-cols-4'>
            <div className='flex'>
                    <p className='text-5xl text-sky-600'><FaRegPaperPlane/></p>
                    <div className='ml-4'>
                    <p className='text-2xl font-bold'>Free Shipping</p>
                    <p className='text-slate-400'>on orders over $35</p>
                    </div>
            </div>
            <div className='flex'>
                    <p className='text-5xl text-sky-600'><FaPhoneAlt/></p>
                    <div className='ml-4'>
                    <p className='text-2xl font-bold'>Premium Support</p>
                    <p className='text-slate-400'>24/7 including holiday</p>
                    </div>
            </div>
            <div className='flex'>
                    <p className='text-5xl text-sky-600'><FaGift/></p>
                    <div className='ml-4'>
                    <p className='text-2xl font-bold'>Member Discount</p>
                    <p className='text-slate-400'>up to 30% off</p>
                    </div>
            </div>
            <div className='flex'>
                    <p className='text-5xl text-sky-600'><FaCreditCard/></p>
                    <div className='ml-4'>
                    <p className='text-2xl font-bold'>Big Savings</p>
                    <p className='text-slate-400'>on special holidy</p>
                    </div>
            </div>
        </div>
    </div>
    );
};

export default FirstSection;