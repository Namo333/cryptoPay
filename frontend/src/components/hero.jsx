import React from 'react';
import Phone from '../icons/img_phone.svg';
import Botsphoto from '../icons/photo-bots.svg';

const Hero = () => (
    <section>
        <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col justify-center items-center md:items-start">
                <h1 className=' p-0 m-0 text-[80px] max-md:max-w-full max-md:text-[50px] font-[629] leading-[1.1em] text-black max-md:my-4 max-lg:my-8 text-center md:text-left'>Crypto payments for <span className="text-[#41A4DF]" >telegram bots</span></h1>
                <p className='text-black max-w-[320px] text-xl font-normal leading-[1.2em] md:my-2 lg:my-4 text-center md:text-left'>Seamlessly accept crypto payments in your Telegram bots and services.</p>
                <div className="pb-4 md:pb-8">
                    <a className="inline-block text-white px-8 py-4 bg-[#41A4DF] rounded-full" href="">Get started</a>
                </div>
                <img class='max-md:w-[300px] max-sm:w-[200px] max-xs:w-[100px] w-[300px]' src={ Botsphoto } alt="" />

                <p className='md:my-2 lg:my-4 text-center md:text-left text-zinc-950 text-xl font-normal leading-normal'>Popular bots use Crypto Pay</p>
            </div>

            <div className="flex justify-center my-4 md:my-0">
                <img className='max-md:max-w-[90%]' src={ Phone } alt="" />
            </div>
        </div>
    </section>
)
export default Hero