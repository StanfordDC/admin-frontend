function WasteItems({prop}){

    return(
        <main className="main-container">
            <table>
                <div className="items">
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
                </div>
            </table>
        </main>
    )
}

export default WasteItems