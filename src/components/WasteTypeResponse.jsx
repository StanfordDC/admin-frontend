import { BsCheckCircle, BsXCircle, BsDashCircle } from 'react-icons/bs';

function WasteTypeResponse({prop}){
    return(
        <main className="main-container">
            <div className="items">
                <div className="object-container">
                    <img
                        src={prop.imageUrl}
                        alt="Waste Type"
                        style={{ maxWidth: '30%', height: 'auto', marginRight: '20px' }}
                    />
                    <div className="object-details">
                        <h2>Detected Objects</h2>
                        {Object.entries(prop.objects).map(([item, count]) => (
                            <div className="object" key={item}>
                                <div>{item}</div>
                                <div className="response">
                                    {count === 0 ? <BsDashCircle /> : count === 1 ? <BsCheckCircle /> : <BsXCircle />}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WasteTypeResponse