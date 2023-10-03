import React from 'react';

import Tree from '../icons/tree.svg';

const InfoTrio = () => (
    <main className='max-w-[488px] max-lg:max-w-none'>
        <section className='bg-[#F7F9FB] rounded-[40px] flex px-[56px] py-[30px] flex-wrap gap-[55px]'>
            <div className="flex items-center justify-center m-auto pt-[40px]">
                <div className="flex items-center justify-center gap-[5px] background-gradient px-[50px] py-[16px] rounded-[17px] text-center text-zinc-950 text-xl font-medium leading-relaxed">
                    <img src={Tree} alt="" />
                    Create App
                </div>

                <div className="">

                <svg width="43" height="47" viewBox="0 0 43 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1275 3.64677C6.7178 1.12449 1.36473 4.88154 2.23774 9.88607L7.45908 39.8172C8.51449 45.8673 16.9001 46.6127 19.006 40.8435L22.4947 31.2864C22.782 30.4994 23.5293 29.9749 24.3671 29.9723L34.541 29.9403C40.6824 29.921 42.8322 21.7813 37.5012 18.7321L11.1275 3.64677Z" fill="url(#paint0_linear_955_3950)" stroke="#F1F5F9" stroke-width="4"/>
                    <defs>
                        <linearGradient id="paint0_linear_955_3950" x1="1.90306" y1="-33.3301" x2="-24.3108" y2="39.2676" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#9FCCFA"/>
                            <stop offset="1" stop-color="#0974F1"/>
                        </linearGradient>
                    </defs>
                </svg> 
                </div>

            </div>

            <div className="">
                <h1 className=' text-zinc-950 text-5xl leading-10 mb-0 pb-0'>One click to start</h1>
                <p className='text-neutral-900 text-opacity-80 text-xl font-normal leading-normal'>Open <span className='text-[#41A4DF]'>@CryptoBot</span>, go to <span className='text-[#41A4DF]'>Crypto Pay</span> and tap Create App to get API Token</p>
            </div>
        </section>
    </main>
)

export default InfoTrio;
