import React from "react";
import Edit from "./components/Edit/Edit";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Pricing />
      <Edit />
    </div>
  );
};

export default App;
