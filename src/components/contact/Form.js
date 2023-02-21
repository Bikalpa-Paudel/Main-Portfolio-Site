import './Form.css'

export default function Form(){
    return(
        <div className="form-container">
            <form action="" className="form">
                <input type="text" name='fullName' className='input full-name-input' placeholder='Full Name'/>
                <input type="email" name='email' className='input email-input' placeholder='E-mail Address'/>
                <textarea name='message' className='input message-input' placeholder='Type Your Message Here'/>
                <div className="msg-btn">
                    <input type="submit" className="input send-btn" value="Send Message"/>
                </div>
            </form>
        </div>
    )
}