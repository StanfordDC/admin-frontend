import { useState, useEffect } from "react";
import WasteTypeResponse from "../components/WasteTypeResponse";
function ListAllResponses(){
    const [responses, setResponses] = useState(null)
    useEffect(() => {
        fetch('http://localhost:8080/responses')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setResponses(data);
          })
      }, [])    
    return <main className="main-container">
        <div className='main-title'>
            <h3>RESPONSES</h3>
        </div>
        {responses && <ul className="list-item">{responses.map(item=><li><WasteTypeResponse prop={item}/></li>)}</ul>}
    </main>
}

export default ListAllResponses