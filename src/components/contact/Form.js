import './Form.css'

export default function Form(){
    return(
        <div className="form-container">
            <form action="" className="form">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name='fullName'/>
            </form>
        </div>
    )
}