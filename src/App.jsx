import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import WasteTypeResponse from './pages/WasteTypeResponse'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const [listWasteTypes, setListWasteTypes] = useState(false)
  const toggleCard = () => {
    setShowCard(!showCard)
  }
  const toggleWasteTypes = () => {
    setListWasteTypes(!listWasteTypes)
  }
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <BrowserRouter>
        <Routes>
          <Route ></Route>
          <Route path="/responses" element={<WasteTypeResponse/>}></Route>
        </Routes>
      </BrowserRouter>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} toggleCard={toggleCard} toggleWasteTypes={toggleWasteTypes}/>
      <Home showCard={showCard} listWasteTypes={listWasteTypes}/>
    </div>
  )
}

export default App
