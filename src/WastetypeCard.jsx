import React from "react";
import { useState } from 'react'
function WastetypeCard(){
    const[itemName, setItemName] = useState('');
    const[description, setDescription] = useState('');
    const[recyclable, setRecyclable] = useState(true);
    const[isPending, setIsPending] = useState(false);

    function handleItemNameChange(event){
        setItemName(event.target.value)
    }

    function handleDescriptionChange(event){
        setDescription(event.target.value)
    }

    function handleRecyclableChange(event){
        setRecyclable(event.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const canBePlaced = recyclable
        const wasteType = {canBePlaced, description, itemName}
        setIsPending(true)
        fetch('http://localhost:8080/waste-type/create', {
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
                <input type="text" value={itemName} onChange={handleItemNameChange}/>
                <div className='main-title'>
                    <h3>DESCRIPTION</h3>
                </div>
                <textarea id="text-box" value={description} onChange={handleDescriptionChange}></textarea>
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

export default WastetypeCard