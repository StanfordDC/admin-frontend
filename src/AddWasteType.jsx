import React from "react";
import { useState } from 'react'
function AddWasteType(){
    const[item, setItem] = useState('');
    const[material, setMaterial] = useState('');
    const[link, setLink] = useState('');
    const[instructions, setInstructions] = useState('');
    const[recyclable, setRecyclable] = useState(true);
    const[isPending, setIsPending] = useState(false);

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
        setRecyclable(event.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        let links = []
        if(link.length != 0){
            links.push(link)
        } else{
            links = null
        }
        const wasteType = {instructions, item, links, material, recyclable}
        setIsPending(true)
        fetch('http://localhost:8080/waste-type', {
            method: 'POST',
            body: JSON.stringify(wasteType)
        }).then(() => {setIsPending(false);
        })
    }

    return(
        <form action="" onSubmit={handleSubmit}>
             <main className='main-container'>
                <div className='main-title'>
                    <h2>ADD NEW WASTE TYPE</h2>
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
                <select name="recyclable" id="" value={recyclable} onChange={handleRecyclableChange}>
                    <option value="true" selected>Yes</option>
                    <option value="false">No</option>
                </select>
                <br /><br />
                {!isPending && <button className="add-button">CONFIRM</button>}
                {isPending && <button className="add-button" disabled>NEW WASTE TYPE ADDED</button>}
        </main>
        </form>
    );
}

export default AddWasteType