import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar, toggleCard, toggleWasteTypes}) {

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' onClick={toggleCard}>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Add waste type
                </a>
            </li>
            <li className='sidebar-list-item' onClick={toggleWasteTypes}> 
                <a href="">
                    <BsListCheck className='icon'/> Search waste type
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar