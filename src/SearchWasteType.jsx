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
      })
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
        <div onClick={toggleDeleteWaste} className="overlay"></div>
        <div className="modal-content">
          <h2>Hello Modal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perferendis suscipit officia recusandae, eveniet quaerat assumenda
            id fugit, dignissimos maxime non natus placeat illo iusto!
            Sapiente dolorum id maiores dolores? Illum pariatur possimus
            quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
            placeat tempora vitae enim incidunt porro fuga ea.
          </p>
          <button className="close-modal" onClick={toggleDeleteWaste}>
            CLOSE
          </button>
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