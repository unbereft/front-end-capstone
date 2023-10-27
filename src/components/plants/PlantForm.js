import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deletePlantById, getPlantsById, postHouseplant, updatePlantById } from "../services/plantsService"
import { getLocations } from "../services/locationService"


export const PlantForm = ({ currentUser, type }) => {
    const [plant, setPlant] = useState({ name: "", img: "", dateAcquiredOrCreated: "", locationId: "", owned: false })
    const navigate = useNavigate()
    const [locations, setLocations] = useState([])
    const param = useParams()

    useEffect(() => {
        getLocations().then((locationArr) => {
            setLocations(locationArr)
        })
    }, [])

    useEffect(() => {
        if (type === "edit") {
            getPlantsById(param.id).then((data) => {
                setPlant(data)
            })
        }
    }, [type, param.id])


    const handleInputChange = (event) => {
        setPlant({ ...plant, [event.target.name]: event.target.value })
    }

    const handleCheckbox = (event) => {
        setPlant({ ...plant, owned: !plant.owned })
    }

    const handleDelete = async () => {
        if (type === "edit") {
            await deletePlantById(plant)
            navigate("/plants")
        }
    }
    const handleSave = async () => {
        const newPlant = {
            id: plant.id,
            name: plant.name,
            img: plant.img,
            dateAcquiredOrCreated: plant.dateAcquiredOrCreated,
            userId: currentUser.id,
            locationId: parseInt(plant.locationId),
            owned: plant.owned
        }
        if (type === "add") {
            const response = await postHouseplant(newPlant)
            navigate("/plants")
        } else if (type === "edit") {
            const response = await updatePlantById(newPlant, newPlant.id)
            navigate("/")

        }


    }

    return (
        <>
            <form>
                <input
                    type="text"
                    name="name"
                    value={plant.name}
                    className="plant-detail"
                    placeholder="Plant Name"
                    required
                    onChange={handleInputChange}

                />
                <input
                    type="text"
                    name="img"
                    value={plant.img}
                    className="plant-detail"
                    placeholder="Plant Image URL"
                    required
                    onChange={handleInputChange}

                />
                <input
                    type="date"
                    name="dateAcquiredOrCreated"
                    value={plant.dateAcquiredOrCreated}
                    className="plant-detail"
                    required
                    onChange={handleInputChange}

                />
                <select
                    id="location"
                    className="plant-detail"
                    placeholder="Locations"
                    name="locationId"
                    required
                    onChange={handleInputChange}

                >
                    <option value="" >Choose A Location</option>
                    {locations.map((location) => (
                        <option key={location.id} value={location.id}>
                            {location.name}
                        </option>
                    ))}
                </select>
                <br /><input type="checkbox" checked={plant.owned} onChange={handleCheckbox} />
                <label>I own this</label>
            </form>
            <button onClick={handleSave}>Save 🪴</button>
            {type === "edit" && (
                <button onClick={handleDelete}>Delete 🗑️</button>
            )}
        </>
    )
}
