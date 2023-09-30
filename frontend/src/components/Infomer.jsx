import React from 'react';

import Eth from '../icons/ETH.svg';
import Usdt from '../icons/USDT.svg';
import Ton from '../icons/TON.svg';
import Btc from '../icons/BTC.svg';
import Trx from '../icons/TRX.svg';
import Ltc from '../icons/LTC.svg';
import Usdc from '../icons/USDC.svg';
import Bnb from '../icons/BNB.svg';

const Infomer = () => (
    <main className='pt-[144px]'>
        <section className='bg-[#F7F9FB] rounded-[40px] flex px-[56px] py-[42px] flex-wrap'>
            <h1 className='max-w-96 text-zinc-950 text-5xl leading-10'>Accept a wide range of cryptocurrencies</h1>
            <p className='max-w-96 text-neutral-900 text-opacity-80 text-xl font-normal leading-normal'>Bill any supported cryptocurrencies with <span className='text-neutral-900 text-opacity-80 text-xl font-medium leading-normal'>asset</span> parameter in <span className='text-[#41A4DF] text-xl font-medium leading-normal'>GetInvoice</span> method</p>

            <div className="flex gap-[20px] mt-[42px] flex-wrap justify-center items-center w-full text-center text-[#11111166]">


                <div className="flex flex-col items-center justify-start hover:text-[#111111]">
                    <img
                        className="relative rounded-881xl overflow-hidden shrink-0 transform transition-all duration-200 hover:scale-110"
                        alt="ETH"
                        src={Eth}
                    />
                    <div className="rounded-881xl flex flex-row items-center justify-start py-1 px-3">
                        <div className="relative leading-[120%] uppercase font-medium">
                            <p>ETH</p>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col items-center justify-start hover:text-[#111111]">
                    <img
                        className="relative rounded-881xl overflow-hidden shrink-0 transform transition-all duration-200 hover:scale-110"
                        alt="USDT"
                        src={Usdt}
                    />
                    <div className="rounded-881xl flex flex-row items-center justify-start py-1 px-3">
                        <div className="relative leading-[120%] uppercase font-medium">
                            <p>USDT</p>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col items-center justify-start hover:text-[#111111]">
                    <img
                        className="relative rounded-881xl overflow-hidden shrink-0 transform transition-all duration-200 hover:scale-110"
                        alt="TON"
                        src={Ton}
                    />
                    <div className="rounded-881xl flex flex-row items-center justify-start py-1 px-3">
                        <div className="relative leading-[120%] uppercase font-medium">
                            <p>TON</p>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col items-center justify-start hover:text-[#111111]">
                    <img
                        className="relative rounded-881xl overflow-hidden shrink-0 transform transition-all duration-200 hover:scale-110"
                        alt="BTC"
                        src={Btc}
                    />
                    <div className="rounded-881xl flex flex-row items-center justify-start py-1 px-3">
                        <div className="relative leading-[120%] uppercase font-medium">
                            <p>BTC</p>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col items-center justify-start hover:text-[#111111]">
                    <img
                        className="relative rounded-881xl overflow-hidden shrink-0 transform transition-all duration-200 hover:scale-110"
                        alt="TRX"
                        src={Trx}
                    />
                    <div className="rounded-881xl flex flex-row items-center justify-start py-1 px-3">
                        <div className="relative leading-[120%] uppercase font-medium">
                            <p>TRX</p>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col items-center justify-start m-auto hover:text-[#111111]">
                    <img
                        className="relative rounded-881xl m-auto overflow-hidden shrink-0 transform transition-all duration-200 hover:scale-110"
                        alt="LTC"
                        src={Ltc}
                    />
                    <div className="rounded-881xl flex flex-row items-center justify-start py-1 px-3">
                        <div className="relative leading-[120%] uppercase font-medium">
                            <p>LTC</p>
                        </div>
                    </div>
                </div>



                <div className="flex flex-col items-center justify-start hover:text-[#111111]">
                    <img
                        className="relative rounded-881xl overflow-hidden shrink-0 transform transition-all duration-200 hover:scale-110"
                        alt="USDC"
                        src={Usdc}
                    />
                    <div className="rounded-881xl flex flex-row items-center justify-start py-1 px-3">
                        <div className="relative leading-[120%] uppercase font-medium">
                            <p>USDC</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-start m-auto hover:text-[#111111] ">
                    <img
                        className="relative rounded-881xl m-auto overflow-hidden shrink-0 transform transition-all duration-200 hover:scale-110"
                        alt="BNB"
                        src={Bnb}
                    />
                    <div className="rounded-881xl flex flex-row items-center justify-start py-1 px-3">
                        <div className="relative leading-[120%] uppercase font-medium">
                            <p>Bnb</p>
                        </div>
                    </div>
                </div>

        
            </div>
        </section>
    </main>
)
export default Infomer