import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Plant } from "../plants/Plant"
import { getPlantsByUserId } from "../services/AllPlantsService"

export const Wishlist = ({currentUser}) => {
    const [plants, setPlants] = useState([])
    const { userId } = useParams()
    
    // useEffect(() => {
    //     getPlantsByUserId(userId).then(data => {
    //         const foundPlants = data.filter((plants) => {
    //             return plants.
    //         })
    //     })
    // }, [userId])
    
    return (
        <>
        <div><h2>Wishlist</h2></div>
        </>
    )
}