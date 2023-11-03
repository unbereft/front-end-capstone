import { useEffect, useState, useContext } from "react"
import { Plant } from "./Plant"
import { getAllPlants } from "../services/plantsService"
import { SearchBar } from "../search/SearchBar"
import { UserContext } from "../views/ApplicationViews"

export const AllPlants = () => {
    const [plants, setPlants] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const currentUser = useContext(UserContext)

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
            <h1>All Houseplants</h1>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

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
