import { useState, useEffect } from "react";
import WasteTypeResponse from "../components/WasteTypeResponse";
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
function ListAllResponses(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    const [responses, setResponses] = useState(null)
    useEffect(() => {
        fetch('https://cruel-ronda-stanford-ad22351b.koyeb.app/responses')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setResponses(data);
          })
      }, [])    
    return(
      <main className="grid-container">
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <div className="main-container">
          <div className='main-title'>
              <h3>RESPONSES</h3>
          </div>
        {responses && <ul className="list-item">{responses.map(item=><li><WasteTypeResponse prop={item}/></li>)}</ul>}
        </div>
    </main>
    )
}

export default ListAllResponses