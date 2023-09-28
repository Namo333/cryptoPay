import React from "react";
// import { Btn } from "./components/Btn";
// import { Tag } from "./components/tag";

import { Navbar, Hero } from "./components";

const App = () => (
  <div className="flex flex-row justify-center w-full">
    <div className="w-[1600px] relative">
      <Navbar />
      <Hero />
    </div>
  </div>
)

export default App;

