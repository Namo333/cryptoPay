import React from 'react';
import Sms from '../icons/sms.svg'

const IndoDwoRight = () => (
    <main className='max-w-[688px]'>
        <section className='bg-[#F7F9FB] rounded-[40px] flex py-[42px] flex-wrap'>
            <div className="w-full px-[25px] py-[40px] mx-[26px] background-gradient3 rounded-[32px]">
                <div className=" bg-white px-[14.96px] py-2.5 rounded-2xl">
                    <p className='m-0 p-0 text-black text-lg font-normal leading-snug flex items-center justify-center'>
                        <img src={Sms} alt="" />
                        <span className='text-black font-bold'>Anonymous</span> 
                          paid your invoice #IV53.
                    </p>

                    <p className='m-0 p-0 text-black text-lg font-normal leading-snug'>You received <span className='text-black text-lg font-bold'>3442 TON ($5000).</span></p>

                        <p className='text-black text-lg font-normal leading-snug m-0 p-0 '>
                            <img className='' src={Sms} alt="" />
                            A generous donation! Keep working <br></br>hard
                            <img src={Sms} alt="" />
                        </p>
                    <p className=' m-0 p-0 text-right text-neutral-900 text-opacity-40 text-sm leading-tight'>21:25</p>
                </div>
            </div>
            <div className="px-[56px]">
                <h1 className='text-zinc-950 text-5xl leading-10'>Anonymous payments</h1>
                <p className='text-neutral-900 text-opacity-80 text-xl font-normal leading-normal mb-0 pb-0'>Use allow_anonymous parameterin <span className='text-[#41A4DF]'>createInvoice</span> method to give useran option to remain private</p>
            </div>
        </section>
    </main>
)

export default IndoDwoRight;
