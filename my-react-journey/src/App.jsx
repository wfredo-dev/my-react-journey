import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Activity1 from "./components/Activity1";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection
        greeting="Hi! Im Wil "
        paragraph="This is my First react project."
      />
      <Activity1 />
    </>
  );
};

export default App;
