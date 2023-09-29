import React from 'react';

import Logo from '../icons/Logo_cryptopay.svg';


const Navbar = () => (


    <header className='flex justify-between items-center pt-[40px] pb-[40px]'>
        <div className="relative w-[163px] h-[64px]">
            <a href=""><img className="" alt="Logo img" src={ Logo } /></a>
        </div>
        <nav className='max-md:hidden'>
            <ul className='flex p-0 m-0 text-dark text-[length:var(--desktop-button-font-size)] text-center tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] whitespace-nowrap [font-style:var(--desktop-button-font-style)]"'>
                <li>
                    <a href="">Use cases</a>
                </li>
                <li className='px-[39px]'>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">How to start</a>
                </li>
            </ul>
        </nav>
        <a className="px-[42px] py-[18px] bg-blue-12 rounded-[900px] text-deep-blue text-[length:var(--desktop-button-font-size)] text-center tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]" href="">Get started</a>
    </header>

)

export default Navbar