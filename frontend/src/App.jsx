import React from "react";

import { Navbar, Hero, Slider, Container, Infomer, InfoTrio } from "./components";

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
      <Infomer />
      <InfoTrio />
    </Container>

  </main>
)

export default App;

