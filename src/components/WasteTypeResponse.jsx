import { BsCheckCircle, BsXCircle, BsDashCircle } from 'react-icons/bs';

function WasteTypeResponse({prop}){
    return(
        <main className="main-container" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <div className="items" style={{ display: 'flex', alignItems: 'flex-start' }}>
                <img 
                    src={prop.imageUrl} 
                    style={{ maxWidth: '30%', height: 'auto', marginRight: '20px' }} 
                />
                <div>
                    <h3>Detected Objects</h3>
                    {Object.entries(prop.objects).map(([item, count]) => (
                        <div className="product" key={item}>
                            <div>{item}</div>
                            <div className="price">{count === 0 ? <BsDashCircle></BsDashCircle> : count === 1 ? <BsCheckCircle></BsCheckCircle> : <BsXCircle></BsXCircle>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default WasteTypeResponse