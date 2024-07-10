import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListAllResponses from './pages/ListAllResponses'

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
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/responses" element={<ListAllResponses/>}></Route>
        </Routes>
      </BrowserRouter>
      // {/* <Header OpenSidebar={OpenSidebar}/>
      // <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} toggleCard={toggleCard} toggleWasteTypes={toggleWasteTypes}/> */}
  )
}

export default App
