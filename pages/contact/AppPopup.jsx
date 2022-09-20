import React, { useState } from 'react';
import Popup from './Popup';
import Form from './contact'
import styles from '../../styles/appForm.module.css'
 
function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return (
        <div>
            <input
            type="button"
            value="Форма обратной связи"
            onClick={togglePopup}
            />
            <div className={styles.form}>
                {isOpen && <Popup
                    content={<>
                        <Form />
                    </>}
                    handleClose={togglePopup}
                    />}
            </div>
        </div>
  )
}
 
export default App;