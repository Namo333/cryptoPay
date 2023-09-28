import React from 'react';

import Phone from '../icons/img_phone.svg';
import Botsphoto from '../icons/photo-bots.svg';

const Hero = () => (

    <section>
        <div className="flex justify-between">
            <div className="flex flex-col justify-center">
                <h1 className='text-[#0d0d12] m-0 w-[692px] font-desktop-h1-header [font-style:var(--desktop-h1-header-font-style)] font-[number:var(--desktop-h1-header-font-weight)] tracking-[var(--desktop-h1-header-letter-spacing)] leading-[var(--desktop-h1-header-line-height)] text-[length:var(--desktop-h1-header-font-size)]'>Crypto payments for <span className="text-[#41a4df] font-desktop-h1-header [font-style:var(--desktop-h1-header-font-style)] font-[number:var(--desktop-h1-header-font-weight)] tracking-[var(--desktop-h1-header-letter-spacing)] leading-[var(--desktop-h1-header-line-height)] text-[length:var(--desktop-h1-header-font-size)]" >telegram bots</span></h1>
                <p className='w-[370px] font-desktop-base-text font-[number:var(--desktop-base-text-font-weight)] text-dark text-[length:var(--desktop-base-text-font-size)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] [font-style:var(--desktop-base-text-font-style)]'>Seamlessly accept crypto paymentsin your Telegram bots and services.</p>
                <div className="pb-[56px]">
                    <a className=" inline-block text-white px-[42px] py-[18px] bg-[#41A4DF] rounded-[900px]" href="">Get started</a>
                </div>
                <img className='w-[320px]' src={ Botsphoto } alt="" />
                <p className='w-[395px] font-desktop-base-text font-[number:var(--desktop-base-text-font-weight)] text-dark text-[length:var(--desktop-base-text-font-size)] tracking-[var(--desktop-base-text-letter-spacing)] leading-[var(--desktop-base-text-line-height)] [font-style:var(--desktop-base-text-font-style)]'>Popular bots use Crypto Pay</p>

            </div>

            <div className="">
                <img src={ Phone } alt="" />
            </div>
        </div>
    </section>

)

export default Hero