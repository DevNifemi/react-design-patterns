import { useState } from 'react'
import './modal.styles.css'

const Modal = ({ children }) => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Show Modal</button>
            {
                showModal && (
                    <div className='modal-body' onClick={() => setShowModal(false)}>

                        <div onClick={(e) => e.stopPropagation()} className='modal'>
                            <button onClick={() => setShowModal(false)}>Close PopUp</button>
                            {/* pass the children prop, which is anything needed to be displayed on the modal  */}
                            {children}
                        </div>

                    </div>
                )
            }
            
        </div>
    )
}

export default Modal
