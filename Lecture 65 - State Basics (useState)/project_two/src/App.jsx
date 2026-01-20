import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Form from './components/Form'
import CoinToss from './components/CoinToss'

function App() {
  const [text, setText] = useState("View");

  return (
    <>
      {/* {text === "View" ? (
        <button onClick={() => setText("Hide")}>View</button>
      ) : (
        <>
          <button onClick={() => setText("View")}>Hide</button>
          <Home />
        </>
      )} */}
      <Form/>
      {/* <CoinToss/> */}
    </>

  )
}

export default App
