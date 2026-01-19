import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Card from './components/Card'
import GrandParent from './components/GrandParent'
import Profile from './components/Profile'

function App() {
  const [tab, setTab] = useState("Home")

  const data=[
      {
       name:"Tanmay",
       age:12
      },
      {
       name:"Yash",
       age:54
      },
      {
       name:"Devanshu",
       age:23
      },
      {
       name:"Prajwal",
       age:30
      },
      {
       name:"Sargar",
       age:22
      }
    ]

  return (
    <>
      {/* <Home/>
      <About/>
      <Contact/> */}
      {/* <Card children="children real props">  */
        /* //this gets ignored */
        /* <h2>I am tanmay</h2>
        <p>I live in Pune</p>
      </Card> */}


      {/* <button onClick={()=>setTab("Home")}>Home</button>
      <button onClick={()=>setTab("About")}>About</button>
      <button onClick={()=>setTab("Contact")}>Contact Us</button>

      {
        tab==="Home"?<Home/>:tab==="About"?<About/>:<Contact/>
      } */}

      <GrandParent/>
      <Card>
        <div className='div'>
          {
            data.map((data,idx)=>{
              return <Profile key={idx} name={data.name} age={data.age}/>
            })
          }
        </div>
      </Card>
    </>
  )
}

export default App
