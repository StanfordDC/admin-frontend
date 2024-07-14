import React from 'react'
import { useNavigate  } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
function Sidebar({openSidebarToggle, OpenSidebar}) {

    const navigate = useNavigate();
    const navigateToCreate = () => {
      navigate('/create'); 
    };
    const navigateToSearch = () => {
        navigate('/search'); 
    };
    const navigateToHome = () => {
        navigate('/'); 
    };
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
            <div className='sidebar-title'>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item' onClick={navigateToHome}>
                    <a href="">
                        <Home className='icon'/> Home
                    </a>
                </li>
                <li className='sidebar-list-item' onClick={navigateToCreate}>
                    <a href="">
                        <AddIcon className='icon'/> Add waste type
                    </a>
                </li>
                <li className='sidebar-list-item' onClick={navigateToSearch}> 
                    <a href="">
                        <SearchIcon className='icon'/> Search waste type
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar