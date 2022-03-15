import React from "react";
import {Route, Routes } from "react-router-dom"
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Registration from "./Component/Registration/Registration";
import Write from "./Component/Write/Write";


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/write" element={ <Write/>}/>
        <Route path="/registration" element={ <Registration/> }/>
      </Routes>
    </div>
  );
}

export default App;
