import React from 'react';

import Bodyphone from '../icons/Body.svg';
import Logoicon from '../icons/icon.svg';
import Dollar from '../icons/dollar.svg';
import Sms from '../icons/sms.svg'
import Medal from '../icons/medal.svg'

const InfoDwoLeft = () => (
    <main>
        <section className='bg-[#F7F9FB] rounded-[40px] flex px-[56px]  flex-wrap'>
            <div className="w-[80%] h-[290px] m-auto flex flex-col px-[30px] py-[47px]"
                style={{ 
                    backgroundImage: `url(${Bodyphone})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center'
                }}>
                <div className="flex justify-between gap-1 max-w-[100%] h-[125px] bg-gradient-to-r from-indigo-50 via-indigo-50 to-indigo-50 rounded-3xl shadow px-[15px] py-[15px]">
                    <div className="flex">
                        <img src={Logoicon} alt="" />
                    </div>

                    <div className="w-full flex flex-col justify-between">
                        <p className='m-0 p-0 text-zinc-900 text-lg font-semibold leading-[18.96px]'>Crypto Bot</p>
                        <p className='m-0 p-0 flex justify-start items-start gap-1 text-zinc-900 text-lg font-normal leading-[18.96px]'>  

                            <img src={Dollar} alt="" />
                            You received 3448 TON ($5000)
                        </p>
                        <p className='m-0 p-0 text-zinc-900 text-lg font-normal leading-[18.96px]'>from @CryptoBot #A777</p>
                        <p className='flex items-center gap-1 text-zinc-900 text-lg font-normal leading-[18.96px]'>
                            <img src={Sms} alt="" />
                            Design contest awards
                            <img src={Medal} alt="" />
                        </p>

                    </div>

                    <div>
                        <p className='m-0 p-0 text-slate-500 text-sm font-medium leading-[14.56px]'>now</p>
                    </div>
                </div>
            </div>

            <div className="">
                <h1 className='text-zinc-950 text-5xl leading-10 mb-0 pb-0'>Send coins to users</h1>
                <p className='text-neutral-900 text-opacity-80 text-xl font-normal leading-normal'>Automate payouts to users with <span className='text-[#41A4DF]'>transfer</span> API method   </p>
            </div>
        </section>
    </main>
)

export default InfoDwoLeft;
