import { useNavigate  } from 'react-router-dom';

function AddConfirmation({resetForm}){
    const navigate = useNavigate();
    const navigateToHome = () => {
      navigate('/'); 
    };
    const reset = () => {
        resetForm(); 
      };
    return(
        <div className="modal">
            <div className="overlay"></div>
                <div className="modal-content">
                <h3>New waste type is created</h3>
                <div className="modal-buttons">
                    <button className="close-modal" onClick={reset}>
                    ADD ANOTHER
                    </button>
                    <button className="close-modal" onClick={navigateToHome}>
                    RETURN HOME
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddConfirmation