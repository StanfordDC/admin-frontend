import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
function WasteItems({prop, toggleDeleteWaste, handleUpdate}){

    return(
        <main className="main-container">
            <div className="items">
                <table>
                    <tr>
                        <td><h3>ITEM</h3></td>
                        <td><h3>: {prop.item}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>INSTRUCTIONS</h3></td>
                        <td><h3>: {prop.instructions}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>MATERIAL</h3></td>
                        <td><h3>: {prop.material}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>RECYCLABLE</h3></td>
                        <td><h3>: {prop.canBePlaced ? "Yes" : "No"}</h3></td>
                    </tr>
                </table>
                <div>
                    <button className="add-button" onClick={() => handleUpdate(prop)}><MdEdit size={25}/></button>
                    <button className="add-button" onClick={() => toggleDeleteWaste(prop.item)}><MdDelete size={25}/></button>
                 </div>
            </div>
        </main>
    )
}

export default WasteItems