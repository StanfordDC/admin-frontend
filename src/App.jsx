import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

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
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} toggleCard={toggleCard} toggleWasteTypes={toggleWasteTypes}/>
      <Home showCard={showCard} listWasteTypes={listWasteTypes}/>
    </div>
  )
}

export default App
