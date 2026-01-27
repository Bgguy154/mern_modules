import { useState,useEffect } from "react";
import "./App.css";
// import Todos from "./components/Todos";
import Timer from "./components/Timer";

function App() {

 const [showTime,setShowTime]=useState("true");

  return (
    <>
      {/* <Todos/> */}
      <button onClick={()=>setShowTime(!showTime)}>{!showTime?"Show time":"Hide Time"}</button>
      {
        showTime?
        <Timer/>:null
      }
    </>
  );
}

export default App;
