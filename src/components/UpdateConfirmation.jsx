import { useNavigate  } from 'react-router-dom';

function UpdateConfirmation(){
    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate('/'); 
    };
    return(
        <div className="modal">
            <div className="overlay"></div>
                <div className="modal-content">
                <h3>Waste type is updated</h3>
                <div className="modal-buttons">
                    <button className="close-modal" onClick={navigateToHome}>
                    OK
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateConfirmation