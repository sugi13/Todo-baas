import "../App.css";

export default function Header() {

    let date = new Date();

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className="Header">
            <div>
                <h2>Focus🚀</h2>
            </div>
            <div className="Date">
                <p>{month[date.getMonth()]} {date.getDate()}</p>
            </div>
        </div>
    )
}
