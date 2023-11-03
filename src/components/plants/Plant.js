import "../styles/Plants.css"
import { Link } from "react-router-dom";

export const Plant = ({ plant }) => {
    return (
        <div className="plant-details">
            <Link to={`/plants/${plant.id}`}>
                <img src={plant?.img} alt={plant?.name} />
            </Link>
            <div className="name-detail">
                <h3>{plant?.name}</h3>
            </div>
            <div className="name-detail">
                <b>Location: </b>
                {plant.location?.name}</div><br />
            <div className="name-detail">
                <b>Date Acquired: </b>
                {plant?.dateAcquiredOrCreated}
            </div>
        </div>

    )
}