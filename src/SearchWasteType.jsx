import React, { useEffect } from "react";
import { useState } from 'react'
import WasteItems from "./WasteItems";
function SearchWasteType(){
    const[wastetypes, setWastetypes] = useState(null)
    const[listAll, setListAll] = useState(true)
    const[itemName, setItemName] = useState("")
    const[wastetype, setWastetype] = useState(null)
    const[deleteWaste, setDeleteWaste] = useState(false)

    const toggleDeleteWaste = () => {
      setDeleteWaste(!deleteWaste)
    }
    
    function handleItemNameChange(event){
        setItemName(event.target.value)
    }

    const handleUpdate = (e) =>{

    }

    const handleDelete = (item) =>{
      fetch('http://localhost:8080/waste-type/'+item,{
        method: 'DELETE'
      }).then(res =>{
        return res.json();
      }),
      setDeleteWaste(!deleteWaste)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setListAll(false)
        fetch('http://localhost:8080/waste-type/'+itemName)
          .then(res => {
            return res.json();
          })
          .then(data => {
            setWastetype(data);
          })
    }

    useEffect(() => {
        fetch('http://localhost:8080/waste-type')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setWastetypes(data);
          })
      }, [])

    return(
    <main className='main-container'>
      {deleteWaste && (
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <h2>Delete Waste Type</h2>
          <p>
            Are you sure you want to delete this item?
          </p>
          <div className="modal-buttons">
            <button className="close-modal" onClick={toggleDeleteWaste}>
              NO
            </button>
            <button className="close-modal" onClick={handleDelete}>
              YES
            </button>
          </div>
        </div>
      </div>
    )}
        <form action="" onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td><input type="text" value={itemName} onChange={handleItemNameChange} placeholder="Search waste type"/></td>
                    <td><button className="add-button">SEARCH</button></td>
                </tr>
            </table>
        </form>
        {listAll && wastetypes && 
        <ul className="list-item">{wastetypes.map(item=><li><WasteItems prop={item}
         toggleDeleteWaste={toggleDeleteWaste} /></li>)}</ul>}
        {!listAll && wastetype && <ul className="list-item"><li><WasteItems prop={wastetype} 
        toggleDeleteWaste={toggleDeleteWaste}/></li></ul>}
    </main>
    )
}

export default SearchWasteType