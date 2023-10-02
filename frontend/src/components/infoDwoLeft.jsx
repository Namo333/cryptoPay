import React from 'react';

import Bodyphone from '../icons/Body.svg';

const InfoDwoLeft = () => (
    <main>
        <section className='bg-[#F7F9FB] rounded-[40px] flex px-[56px] py-[42px] flex-wrap'>
            <div className="">
                <img src={Bodyphone} alt="" />
            </div>

            <div className="">
                <h1 className='text-zinc-950 text-5xl leading-10 mb-0 pb-0'>Send coins to users</h1>
                <p className='text-neutral-900 text-opacity-80 text-xl font-normal leading-normal'>Automate payouts to users with <span className='text-[#41A4DF]'>transfer</span> API method   </p>
            </div>
        </section>
    </main>
)

export default InfoDwoLeft;
