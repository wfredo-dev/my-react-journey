import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Activity1 from "./components/Activity1";
import Movies from "./components/Movies";
import Activity2 from "./components/Activity2";
import Activity3 from "./components/Activity3";
import "./Modal.css";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection
        greeting="Hi! Im Wil "
        paragraph="This is my First react project."
      />
      <Activity1 />
      <Movies />
      <Activity2 />
      <Activity3 />
    </>
  );
};

export default App;
