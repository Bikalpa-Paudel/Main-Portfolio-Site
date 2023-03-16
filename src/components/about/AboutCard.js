import './AboutCard.css'

export default function AboutCard(props) {
    return (
        <div className="about-card">
            <div className="about-icon">{props.icon}</div>
            <div className="about-title">{props.title}</div>
            <div className="about-info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis harum vero expedita nesciunt libero commodi, iure distinctio unde possimus eaque.</div>
        </div>
    )
}