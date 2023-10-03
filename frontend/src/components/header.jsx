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
        <div className="flex items-center justify-center gap-[12px]">
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">
                    <g clip-path="url(#a)">
                        <path stroke="#111" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".8" stroke-width="2" d="M16 22.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334Zm0-21.334V4m0 24v2.667M5.626 5.627 7.52 7.52m16.96 16.96 1.893 1.893M1.333 16H4m24 0h2.667M5.626 26.373 7.52 24.48M24.48 7.52l1.893-1.893"/>
                    </g>
                    <defs>
                        <clipPath id="a">
                        <path fill="#fff" d="M0 0h32v32H0z"/>
                        </clipPath>
                    </defs>
                </svg>

            </button>
            <a className="px-[42px] py-[18px] bg-blue-12 rounded-[900px] text-deep-blue text-[length:var(--desktop-button-font-size)] text-center tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)]" href="">Get started</a>
        </div>
    </header>

)

export default Navbar