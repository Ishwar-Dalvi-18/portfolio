import { useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { settingsContext } from './contexts/settingsContext'

function App() {
  const {settings , setSettings} = useContext(settingsContext);
  const nav_ref = useRef()
  
  const [navigation, setNavigation] = useState({
    current:"home"
})
  return (
    <div >
    <Navbar navigation={navigation} setNavigation={setNavigation} nav_ref={nav_ref} theme={settings.theme==="black"?"white":"black"}/>
      <Routes>
        <Route path='/' element={<Home nav_ref={nav_ref} setNavigation={setNavigation} />} />
      </Routes>
    </div>
  )
}

export default App
