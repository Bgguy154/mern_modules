import './App.css'
import Display from './components/Display'
import Card from './components/Card'
import Profile from './components/Profile'


function App() {
  const user={
    name: "Tanmay Tapre",
    email: "tanmay@gmail.com",
    role: "SDE Aspirant",
    joinedAt: "January 2026",
    }
  return (
    <>
      <Display name="Tanmay"/>
      <Card theme="dark"/>
      <Card theme="light"/>
      <Profile user={user}/>
    </>
  )
}

export default App
