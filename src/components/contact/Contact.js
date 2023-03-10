import "./Contact.css"
import Form from "./Form"

export default function Contact(){
    return(
        <section id="contact">
            <div className="contact-container">
                <div className="contact-text">Contact Me</div>
                <div className="contact-container-2">

                    <iframe title='0' className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1315.06004684759!2d85.33150038172123!3d27.718674744364883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1676904173818!5m2!1sen!2snp" width="600" height="600" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <Form />
                </div>
            </div>
        </section>
    )
}
