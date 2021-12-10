import ReactDOM from 'react-dom';
import "./Modal.css"

const ModalPortal = ({children, isOpen, closeModal}) => {
    const handleModalContainerCLick = e => e.stopPropagation();

    return ReactDOM.createPortal(
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerCLick}>
                <button className="modal-close" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>,
        document.getElementById("modal")
    );
}

export default ModalPortal;