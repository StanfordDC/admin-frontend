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
                        {prop.items && prop.items.map(item =>
                            <div className='object'>
                                <div>{item.item}</div>
                                <div>{item.source}</div>
                                <div className="response">
                                    {item.feedback == 0 ? <BsDashCircle /> : item.feedback == 1 ? <BsCheckCircle /> : <BsXCircle />}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default WasteTypeResponse