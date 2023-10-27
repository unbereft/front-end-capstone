import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getPlantsById } from "../services/plantsService"
import { Plant } from "./Plant"

// Plant Details field/form requirements:
// Plant Name {plant.name}
// Date Acquired/Created {plant.dateAcquiredOrCreated}
// Plant Image URL {plant.img}
// Location -- placeholder: {plant.location.name}
// Edit Plant button -- "/plants/${plant.id}/edit"

export const PlantDetails = () => {
    const [plant, setPlant] = useState([])
    const { plantId } = useParams()

    useEffect(() => {
        getPlantsById(plantId).then((plantArr) => {

            setPlant(plantArr)

        })
    }, [plantId])


    return (
        <>
            <h2>Plant Details</h2>
            <div className="plant-details">
                <Plant plant={plant} />
                <div className="buttons">
                <Link to={`/plants/${plant.id}/edit`}>
                    <button className="edit-btn">Edit Plant </button>
                    </Link>
                </div>
            </div>
        </>
    )
}


// Given the path navigates to /plants/${plant.id}
// When you click Edit Plant
// Then the path will navigate to /plants/${plant.id}/edit

// ?
// First fetch the plants and set the state
// I need to fetch it using plant.id as the parameter
// I want to fetch only the plants with the specified plant id
// Populate the fields with the data
// Finish form code -- think about how this component can be reused
// Buttons
// Edit Plant button
// Add to Wishlist button - STRETCH 
