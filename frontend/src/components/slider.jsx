import React, { useState, useEffect } from 'react';
import grad from '../icons/grad.svg';
import grad2 from '../icons/grad2.svg';
import grad3 from '../icons/grad3.svg';

const slides = [
    {
      image: grad,
      title: 'InstantAuto Sales: Boost conversion',
      text: 'Immediately deliver digital productsand services to your users.',
    },
    {
      image: grad2,
      title: 'Channels integration: Seamless access',
      text: 'Automatically unlock exclusive contentto your users.',
    },
    {
      image: grad3,
      title: 'Endless customization: with Webhooks',
      text: 'Receive successful payment notifications inreal-time. Integrate to any scenario of your service.',
    }
  ];
  
  export default function Slider() {
    const [activeSlide, setActiveSlide] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setActiveSlide(s => s + 1 >= slides.length ? 0 : s + 1);
      }, 5000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center justify-center h-full lg:h-screen overflow-hidden">
                {slides.map((slide, index) =>
                index === activeSlide ? (
                    <div className="flex flex-col lg:flex-row items-center justify-center p-5" key={index}>
                    <div className="mb-3 lg:mb-0 lg:pr-[120px]">
                        <img src={slide.image} alt={slide.title} className="max-w-2xl w-full h-auto sm:max-w-2xl" />
                    </div>
                    <div>
                        <h2 className="text-[56px] max-lg:text-[30px] text-white text-primary mb-8 font-[629] tracking-[-0.03em] leading-[1.1em]">
                        {slide.title.split(': ').map((text, i) => (
                            i === 0 ? (
                            <span key={i} className="text-[#41A4DF]">{text}</span>
                            ) : (
                            <React.Fragment key={i}>: {text}</React.Fragment>
                            )
                        ))}
                        </h2>
                        <p className="text-white text-primary mb-14 text-xl sm:mb-14 sm:text-lg md:text-xl font-normal leading-[1.2em]">{slide.text}</p>
                        <a className="inline-block text-white px-[42px] py-[18px] bg-[#41A4DF] rounded-full" href="">Open API Docs</a>
                    </div>
                    </div>
                ) : null)}
            </div>

            <div className="flex flex-row lg:flex-col items-center justify-center py-2.5">
                <span className="text-primary mb-3 text-white">01</span>
                {slides.map((_, index) => (
                <span key={index} className="mb-3 mx-1 lg:mx-0 lg:w-1 lg:h-28 w-[82px] h-1 bg-gray-200 rounded-full cursor-pointer" style={{ backgroundColor: activeSlide === index ? '#41A4DF' : 'rgba(255, 255, 255, 0.24)' }} onClick={() => setActiveSlide(index)}></span>
                ))}
                <span className="text-primary max-lg:mb-3 text-white">03</span>
            </div>
        </div>
    );
  }