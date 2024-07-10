import React, { useEffect } from "react";
import { useState } from 'react'
import WasteItems from "../components/WasteItems";
import UpdateWasteType from "./UpdateWasteType";
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
function SearchWasteType(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    const[wastetypes, setWastetypes] = useState(null)
    const[listAll, setListAll] = useState(true)
    const[itemName, setItemName] = useState("")
    const[wastetype, setWastetype] = useState(null)
    const[deleteWaste, setDeleteWaste] = useState(false)
    const[deletedItem, setDeletedItem] = useState("")
    const[update, setUpdate] = useState(false)

    function toggleDeleteWaste(itemName){
      setDeleteWaste(!deleteWaste)
      setItemName(itemName)
    }
    
    function handleItemNameChange(event){
        setItemName(event.target.value)
    }

    function handleUpdate(prop){
      setUpdate(true)
      setWastetype(prop)
    }

    const handleDelete = () =>{
      fetch('http://localhost:8080/waste-type/'+itemName,{
        method: 'DELETE'
      }).then(res =>{
        setWastetype(null)
        setDeletedItem(itemName)
        setListAll(true)
        setItemName('')
        setDeleteWaste(!deleteWaste)
        return res.json();
      })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setListAll(false)
        fetch('http://localhost:8080/waste-type/'+itemName)
          .then(res => {
            if (res.status === 404) {
              setWastetype(null);
              return null;
            }
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
      }, [deletedItem])

    return(     update ? <UpdateWasteType prop={wastetype}/> : 
    <main className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div className="main-container">
      {deleteWaste && (
            <div className="modal">
              <div className="overlay"></div>
              <div className="modal-content">
                <h2>Delete Waste Type</h2>
                <p>
                  Are you sure you want to delete this item?
                </p>
                <div className="modal-buttons">
                  <button className="close-modal" onClick={() => toggleDeleteWaste("")}>
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
         toggleDeleteWaste={toggleDeleteWaste} handleUpdate={handleUpdate}/></li>)}</ul>}
        {!listAll && wastetype && <ul className="list-item"><li><WasteItems prop={wastetype} 
        toggleDeleteWaste={toggleDeleteWaste} handleUpdate={handleUpdate}/></li></ul>}
      </div>
    </main>
    )
}

export default SearchWasteType