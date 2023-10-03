import React from 'react';

import Numicon from '../icons/numBlock.svg';

const NumSection = () => {
    return (
        <div className='flex items-center justify-between flex-wrap gap-[30px]'>
            <div className="w-[450px]">
                <div className="w-16 h-16 background-gradient4 rounded-full shadow justify-center items-center inline-flex">
                    <p className="text-center text-white text-[42px] leading-[46.20px]">1</p>
                </div>
                <h1 className='m-0 pb-[20px] pt-[29px] max-w-full text-zinc-950 text-[42px] leading-[46.20px]'>Authorizing your app</h1>
                <p className='m-0 p-0 text-zinc-950 text-xl font-normal leading-normal'>1. Open <span className='text-[#41A4DF]'>@CryptoBot</span></p>
                <p className='m-0 p-0 text-zinc-950 text-xl font-normal leading-normal'>2. Go to <span className='text-[#41A4DF]'>Crypto Pay</span></p>
                <p className='m-0 p-0 text-zinc-950 text-xl font-normal leading-normal'>3. Tap <span className='text-[#41A4DF]'>Create App</span></p>
                <p className='m-0 p-0 text-zinc-950 text-xl font-normal leading-normal'>4. Get <span className='text-[#41A4DF]'>API Token</span></p>
            </div>
            <div className="">
                <img src={Numicon} alt="" />
            </div>
        </div>
    );
}

export default NumSection;
