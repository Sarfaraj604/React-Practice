import styles from './Contact.module.css';
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import Button from '../Button/Button';
import { useState } from 'react';
const ContactForm = () => {
  const [name, setName] = useState("Sarfaraj Ansari");
  const [eamil, setEmail] = useState("sarfaraj2002@gmail.com");
  const [text, setText] = useState("I am Keera");
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  
  return (
    <section className={styles.container}>
    <div className={styles.contact_form}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button text="VIA CALL" icon={<FaPhone fontSize="24px" />}/>
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
        <form onSubmit={onSubmit} >
            <div className={styles.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name'/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="email">E-mail</label>
                <input type="email" name='eamil'/>
            </div>
            <div className={styles.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name='text' rows="8"/>
            </div>
            <div style={{
                display:"flex",
              justifyContent:"end",
            }}>
            <Button text="SUBMIT"/>
            </div>
            <div>{name + " || " + eamil + " || " + text }</div>
        </form>
    </div>
    <div className={styles.contact_image}>
      <img src="/images/Service 24_7-pana 1.svg" alt="contact image" />
    </div>
    </section>

  )
}

export default ContactForm;
