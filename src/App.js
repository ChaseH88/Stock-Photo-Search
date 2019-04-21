import React, { useState } from "react";
import './App.css';
import Search from './components/Search';
import Results from "./components/Results";

const App = () => {
  const [picData, setPicData] = useState();
  // Get the data from Search Component
  function passResult(data){
    setPicData(data);
  }
    return (
      <div id="main">
        <Search set={passResult} />
        <Results data={picData} />
      </div>
    );
}

export default App;
