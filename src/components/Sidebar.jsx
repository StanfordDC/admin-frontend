import React from 'react'
import {BsFillGrid3X3GapFill, BsListCheck} from 'react-icons/bs'
import { useNavigate  } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {

    const navigate = useNavigate();
    const navigateToCreate = () => {
      navigate('/create'); 
    };
    const navigateToSearch = () => {
        navigate('/search'); 
      };
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item' onClick={navigateToCreate}>
                    <a href="">
                        <BsFillGrid3X3GapFill className='icon'/> Add waste type
                    </a>
                </li>
                <li className='sidebar-list-item' onClick={navigateToSearch}> 
                    <a href="">
                        <BsListCheck className='icon'/> Search waste type
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar