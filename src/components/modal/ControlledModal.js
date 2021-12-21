import './modal.styles.css'

const ControlledModal = ({ shouldShow, shouldClose, children }) => {

    return shouldShow ? (
        
                    <div className='modal-body' onClick={shouldClose}>

                        <div onClick={(e) => e.stopPropagation()} className='modal'>
                            <button onClick={shouldClose}>Close PopUp</button>
                            {/* pass the children prop, which is anything needed to be displayed on the modal  */}
                            {children}
                        </div>

                    </div>
           
    ) : null
}

export default ControlledModal
