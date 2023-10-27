import { useEffect, useState } from "react"
import { Plant } from "./Plant"
import { getAllPlants } from "../services/plantsService"
import { SearchBar } from "../search/SearchBar"

export const AllPlants = ({ currentUser }) => {
    const [plants, setPlants] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getAllPlants().then(plantArr => {
            setPlants(plantArr)
        })
    }, [])

    const foundPlants = plants.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="plant-container">
            <div className="search-bar">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <h2>All Houseplants</h2>
            <div className="houseplants">
                {foundPlants.map((plantArr) => {
                    return (
                        <div className="plant-card" key={plantArr.id}>
                            <Plant
                                plant={plantArr}
                                key={plantArr.id}
                                currentUser={currentUser}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
