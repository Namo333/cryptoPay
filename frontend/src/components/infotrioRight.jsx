import React from 'react';

 import Back from '../icons/BG.svg';

const InfotrioRight = () => (
    <main className='max-w-[692px]'>
        <section className='bg-[#F7F9FB] rounded-[40px] flex px-[56px] py-[42px] flex-wrap h-748'>
            <div className="  w-full h-full  rounded-[20px] flex flex-col px-[72px] py-[47px] gap-[5px]"
                style={{ 
                    backgroundImage: `url(${Back})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}>
                <div className="flex flex-col bg-white px-[15px] rounded-t-[16px] rounded-b-[7px] text-black text-xl font-normal font-['SF Pro'] leading-snug">
                    <p>Application Statistics <span className='text-[0D0D12] font-semibold text-xl leading-snug'>@GoodsBot</span> for <span className='text-[0D0D12] font-semibold text-xl leading-snug'>all time:</span></p>
                    <p>Volume: $6,530</p>
                    <div>
                        <p className="m-0 p-0">The number of created invoices: 15,569</p>
                        <p className="m-0 p-0">Number of payments: 6,453</p>
                        <p className="m-0 p-0">Number of users: 5,606</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p>Conversion: 41%</p>
                        <p className="text-neutral-900 text-opacity-40 text-sm leading-tight">21:30</p>
                    </div>
                </div>
                <div className="text-[white] flex flex-col gap-[5px]">
                    <div className="flex gap-[5px]">
                        <div className='bg-[#3688C2D1] h-[50px] rounded-[7px] flex items-center justify-center w-1/2 text-xl'>· All Time ·</div>
                        <div className='bg-[#3688C2D1] h-[50px] rounded-[7px] flex items-center justify-center w-1/2 text-xl'>Today</div>
                    </div>

                    <div className="flex gap-[5px]">
                        <div className='bg-[#3688C2D1] h-[50px] rounded-[7px] flex items-center justify-center w-1/2 text-xl'>Yesterday</div>
                        <div className='bg-[#3688C2D1] h-[50px] rounded-[7px] flex items-center justify-center w-1/2 text-xl'>Week</div>
                    </div>

                    <div className='bg-[#3688C2D1] h-[50px] rounded-[7px] flex items-center justify-center w-full text-xl'>Month</div>

                    <div className='bg-[#3688C2D1] h-[50px] rounded-t-[7px] rounded-b-[16px] w-full flex items-center justify-center gap-[6px] text-xl'>
                        <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.18324 1.63171L1.42725 5.38771L5.18324 9.1437" stroke="white" stroke-width="2.81699" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                        Back
                    </div>
                </div>
            </div>

            <h1 className=' text-zinc-950 text-5xl leading-10 mb-0 pb-0'>
                Payment statistics
            </h1>
            <p className='text-neutral-900 text-opacity-80 text-xl font-normal leading-normal'>Open <span className='text-[#41A4DF]'>@CryptoBot</span>, go to <span className='text-[#41A4DF]'>Crypto Pay</span> and <span className='text-[#41A4DF]'>My Apps</span>, App Name to get Statistics</p>

        </section>
    </main>
)

export default InfotrioRight;
