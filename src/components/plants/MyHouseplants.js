import { useEffect, useState } from "react";
import { Plant } from "./Plant";
import { getPlantsByUserId } from "../services/plantsService";
import "./Plants.css";
import { SearchBar } from "../search/SearchBar";

export const MyHouseplants = ({ currentUser }) => {
    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

//! My Houseplants needs to check if plant.userId === currentUser.id && plant.owned === true

    useEffect(() => {
        getPlantsByUserId(currentUser.id).then((plantArr) => {
            setPlants(plantArr);
        });
    }, [currentUser.id]);

    const foundPlants = plants.filter(plant => plant.userId === currentUser.id && plant.owned === true && plant.name.toLowerCase().includes(searchTerm.toLowerCase()));


    return (
        <div className="plant-container">
            <div className="search-bar">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <h2>My Houseplants</h2>
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
    );
};

// ? What steps do I need to take to render this page?
// set the plants state --> done on initial render
// utilize console logs to see it set
// rewatch videos / revisit notes if needed
// finish Plant component -- look at Honey Rae's
// map through plants
