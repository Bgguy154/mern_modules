import { useState } from 'react'
// import './App.css'
// import Form from './components/Form'
import ApiCall from './components/ApiCall'
// import LiftingStateUp from './components/LiftingStateUp'


function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            {/* <Form/>
            <ApiCall/> */}
            {/* <LiftingStateUp/> */}
            <ApiCall/>
        </>
    )
}

export default App
