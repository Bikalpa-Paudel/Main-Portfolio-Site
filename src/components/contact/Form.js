import './Form.css'
import { useState } from 'react'
import emailjs from "emailjs-com"


export default function Form(){
    const [formData, setFormData] = useState({
        name: "", email : "", message: "" }
        )

        function handleOnChange(event){
            setFormData(prevData => {
                return{
                    ...prevData,
                    [event.target.name] : event.target.value
                }
            });
            
        }

        function submit(e){
            e.preventDefault();
            console.log(formData);
            
            emailjs.sendForm('service_un4zefy', 'template_bjvjtgk', e.target, 'Py1unXBVTEVJHOven')
                .then((result) => {
                    console.log(result.text)
                }, (error) => {
                    console.log(error.text);
                });
                e.target.reset()
        }


    return(
        <div className="form-container">
            <form onSubmit={submit}  className="form">
                <input 
                    type="text" 
                    name='name' 
                    className='input full-name-input' 
                    placeholder='Full Name'
                    onChange={handleOnChange}
                    required/>
                <input 
                    type="email" 
                    name='email' 
                    className='input email-input' 
                    placeholder='E-mail Address'
                    onChange={handleOnChange}
                    required/>
                <textarea 
                    name='message' 
                    className='input message-input' 
                    placeholder='Type Your Message Here'
                    onChange={handleOnChange}
                    required/>
                <div className="msg-btn">
                    <input type="submit" className="input send-btn" value="Send Message"/>
                </div>
            </form>
        </div>
    )
}