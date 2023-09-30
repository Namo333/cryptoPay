import React from "react";

import { Navbar, Hero, Slider, Container, Infomer, InfoTrio, InfotrioDown, InfotrioRight, IndoDwoRight, InfoDwoLeft } from "./components";

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
        <div className="flex gap-[20px]">
          <div className="w-1/2 flex flex-col gap-[20px]">
            <InfoTrio />
            <InfotrioDown />
          </div>
          <div className="w-2/3 h-full">
            <InfotrioRight />
          </div>
        </div>
        <div className="flex gap-[20px]">
          <div className="w-2/3">
            <InfoDwoLeft />
          </div>
          <div className="w-1/3">
            <IndoDwoRight />
          </div>
        </div>
      </div>
    </Container>

  </main>
)

export default App;

