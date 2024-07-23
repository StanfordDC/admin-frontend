import React from "react";
import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import UpdateConfirmation from "../components/UpdateConfirmation";
import { WASTETYPE_ENDPOINT } from "../API/API";
function UpdateWasteType({prop}){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
    const[item, setItem] = useState(prop.item);
    const[material, setMaterial] = useState(prop.material);
    const[link, setLink] = useState(prop.links == null ? '' : prop.links[0]);
    const[instructions, setInstructions] = useState(prop.instructions);
    const[isRecyclable, setIsrecyclable] = useState(prop.recyclable);
    const[isUpdated, setIsUpdated] = useState(false);

    function handleMaterialChange(event){
        setMaterial(event.target.value)
    }

    function handleLinkChange(event){
        setLink(event.target.value)
    }

    function handleItemChange(event){
        setItem(event.target.value)
    }

    function handleInstructionsChange(event){
        setInstructions(event.target.value)
    }

    function handleRecyclableChange(event){
        setIsrecyclable(event.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const id = prop.id
        let links = []
        if(link.length != 0){
            links.push(link)
        } else{
            links = null
        }
        let recyclable = isRecyclable == "true"
        const wasteType = {id, instructions, item, links, material, recyclable}
        fetch(WASTETYPE_ENDPOINT, {
            method: 'PUT',
            body: JSON.stringify(wasteType)
        }).then(() => {setIsUpdated(true);
        })
    }

    return(
        <form action="" onSubmit={handleSubmit}>
             <main className='grid-container'>
                {isUpdated && <UpdateConfirmation/>}
                <Header OpenSidebar={OpenSidebar}/>
                <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
                <div className="main-container">
                    <div className='main-title'>
                        <h2>UPDATE WASTE TYPE</h2>
                    </div>
                    <div className='main-title'>
                        <h3>ITEM NAME</h3>
                    </div>
                    <input type="text" value={item} onChange={handleItemChange}/>
                    <div className='main-title'>
                        <h3>RECYCLING INSTRUCTIONS</h3>
                    </div>
                    <textarea id="text-box" value={instructions} onChange={handleInstructionsChange}></textarea>
                    <div className='main-title'>
                        <h3>LINK FOR FURTHER INFORMATION</h3>
                    </div>
                    <input type="text" value={link} onChange={handleLinkChange}/>
                    <div className='main-title'>
                        <h3>WASTE MATERIAL</h3>
                    </div>
                    <input type="text" value={material} onChange={handleMaterialChange}/>
                    <div className='main-title'>
                        <h3>RECYCLABLE</h3>
                    </div>
                    <select name="recyclable" id="" value={isRecyclable} onChange={handleRecyclableChange}>
                        <option value="true" selected>Yes</option>
                        <option value="false">No</option>
                    </select>
                    <br /><br />
                    <button className="add-button">UPDATE</button>
                </div>
            </main>
        </form>
    );
}

export default UpdateWasteType