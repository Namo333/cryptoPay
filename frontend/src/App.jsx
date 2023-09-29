import React from "react";
// import { Btn } from "./components/Btn";
// import { Tag } from "./components/tag";

import { Navbar, Hero, Slider } from "./components";

const App = () => (
  <div className="flex flex-row justify-center w-full">
    <div className="w-[1200px] relative">
      <Navbar />
      <Hero />
      <section>
        <Slider />
      </section>
    </div>
  </div>
)

export default App;

