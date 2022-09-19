import Form from './contact/contact'
import styles from '../styles/Home.module.css'
import Popup from './contact/AppPopup'

export default function Home() {
  return (
   <>
    <div className={styles.form}>
    <Form />
    </div>
    <div>
      <Popup />
    </div>
    
   </>
  )
}
