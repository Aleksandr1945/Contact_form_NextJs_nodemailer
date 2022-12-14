import styles from '../../styles/contact.module.css'
import { useState } from 'react'

export default function Form () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
      let data = {
          name,
          email,
          message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setName('')
              setEmail('')
              setBody('')
            }
          })
      }

    return (
        <div className={styles.container}>
          <form className={styles.main} >

            <formgroup className={styles.inputGroup} >
              < label htmlFor='name'>Имя</label>
              < input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} />
            </formgroup>

            <formgroup className={styles.inputGroup} >
              < label htmlFor='email'>Email</label>
              < input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} />
            </formgroup>

            <formgroup className={styles.inputGroup} >
              < label htmlFor='message'>Сообщение</label>
              < input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.inputField} />
            </formgroup>

            < input className={styles.button}  type='submit' onClick={(e)=>{handleSubmit(e)}}/>
          </form>
        </div>
    )
}