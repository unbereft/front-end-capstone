import "./Plants.css";
import { Link } from "react-router-dom";

export const Plant = ({ plant }) => {
    return (
        <div>
            <div className="plant-details">
            <Link to={`/plants/${plant.id}`}>
                <img src={plant?.img} alt={plant?.name} />
            </Link>
            </div>
            <div className="plant-details">
                <b>{plant?.name}</b><br />
                <b>Location: </b>
                {plant.location?.name}<br />
                <b>Date Acquired: </b>
                {plant?.dateAcquiredOrCreated}
            </div>
        </div>

    )
}