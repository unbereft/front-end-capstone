import { useEffect, useState, useContext } from "react";
import { Plant } from "./Plant";
import { getPlantsByUserId } from "../services/plantsService";
import { SearchBar } from "../search/SearchBar";
import "../styles/Plants.css"
import { UserContext } from "../views/ApplicationViews";

export const MyHouseplants = () => {
    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const currentUser = useContext(UserContext)
    
// My Houseplants needs to check if plant.userId === currentUser.id && plant.owned === true

    useEffect(() => {
        getPlantsByUserId(currentUser.id).then((plantArr) => {
            setPlants(plantArr)
        })
    }, [currentUser.id])

    const foundPlants = plants.filter(plant => plant.userId === currentUser.id && plant.owned === true && plant.name.toLowerCase().includes(searchTerm.toLowerCase()))


    return (
        <div className="plant-container">
            <div className="search-bar">
            <h1>My Houseplants</h1>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="houseplants">
                {
                    foundPlants.map((plantArr) => (
                        <div className="plant-card" key={plantArr.id}>
                            <Plant
                                plant={plantArr}
                                currentUser={currentUser}
                            />
                        </div>
                    ))}

            </div>

        </div>
    )
}

// ? What steps do I need to take to render this page?
// set the plants state --> done on initial render
// utilize console logs to see it set
// rewatch videos / revisit notes if needed
// finish Plant component -- look at Honey Rae's
// map through plants
