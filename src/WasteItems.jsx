function WasteItems({prop}){

    return(
        <main className="main-container">
            <table>
                <div className="items">
                    <tr>
                        <td><h3>ITEM NAME</h3></td>
                        <td><h3>: {prop.itemName}</h3></td>
                    </tr>
                    <tr>
                        <td><h3>DESCRIPTION</h3></td>
                        <td><h3>: {prop.description}</h3></td>
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