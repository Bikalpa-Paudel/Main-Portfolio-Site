import './Form.css'
import { useState } from 'react'


export default function Form(){
    const [formData, setFormData] = useState({
        fullName: "", email : "", message: "" }
        )

        function handleOnChange(event){
            setFormData(prevData => {
                return{
                    ...prevData,
                    [event.target.name] : event.target.value
                }
            });
            
        }


    return(
        <div className="form-container">
            <form action="" className="form">
                <input 
                    type="text" 
                    name='fullName' 
                    className='input full-name-input' 
                    placeholder='Full Name'
                    onChange={handleOnChange}
                    />
                <input 
                    type="email" 
                    name='email' 
                    className='input email-input' 
                    placeholder='E-mail Address'
                    onChange={handleOnChange}
                    />
                <textarea 
                    name='message' 
                    className='input message-input' 
                    placeholder='Type Your Message Here'
                    onChange={handleOnChange}
                />
                <div className="msg-btn">
                    <input type="submit" className="input send-btn" value="Send Message"/>
                </div>
            </form>
        </div>
    )
}