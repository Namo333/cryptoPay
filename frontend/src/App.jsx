import React from "react";

import { Navbar, Hero, Slider, Container, Infomer, InfoTrio, InfotrioDown, InfotrioRight, IndoDwoRight, InfoDwoLeft, NumSection, NumSectiomSecond, NumSectiomThree } from "./components";

const App = () => (
  <main>
    <Container>
      <div className="">
        <Navbar />
        <Hero />
      </div>
    </Container>
    <div className="bg-[#232328] mt-[150px]">
      <Container>
        <Slider />
      </Container>
    </div>

    <Container>
      <div className="flex flex-col gap-[20px]">
        <Infomer />
        <div className="flex gap-[20px] max-lg:flex-wrap">
          <div className=" w-5/12 flex max-lg:flex-wrap flex-col gap-[20px]">
            <InfoTrio />
            <InfotrioDown />
          </div>
          <div className="">
            <InfotrioRight />
          </div>
        </div>
        <div className="flex max-lg:flex-wrap gap-[20px]">
          <div className="">
            <InfoDwoLeft />
          </div>
          <div className="">
            <IndoDwoRight />
          </div>
        </div>
      </div>
    </Container>

    <div className="bg-[#F7F9FB] mt-[144px] p-[120px]">
      <Container>
        <h1 className="text-neutral-800 text-[36px] leading-[61.60px] text-center">Quick start using <span className="text-[#41A4DF]">Crypto Pay</span></h1>
        <div className="">
          <NumSection />
          <NumSectiomSecond />
          <NumSectiomThree />
        </div>
      </Container>
    </div>

  </main>
)

export default App;

