import { Route, Routes, Outlet } from "react-router-dom"
import { useState, useEffect } from 'react'
import { NavBar } from "../nav/NavBar"
import { MyHouseplants } from "../plants/MyHouseplants"
// import { Wishlist } from "../wishlist/Wishlist"
import { AllPlants } from "../plants/AllPlants"
import { PlantDetails } from "../plants/PlantDetails"
import { AddPlant } from "../plants/AddPlant"
import { EditPlantDetails } from "../plants/EditPlantDetails"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const localHouseplantUser = localStorage.getItem("houseplant_user")
        const houseplantUserObject = JSON.parse(localHouseplantUser)
        setCurrentUser(houseplantUserObject)
    }, [])


    return (
        <Routes>
            <Route path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<MyHouseplants currentUser={currentUser} />}  />
                <Route path="/plants" element={<AllPlants currentUser={currentUser} />} />
                    <Route path="/plants/:plantId" element={<PlantDetails />}  />
                    <Route path="/plants/:id/edit" element={<EditPlantDetails  currentUser={currentUser} />}  />
                </Route>
                <Route path="plants/add" element={<AddPlant currentUser={currentUser}/>} />
                
                {/* <Route path="wishlist/:userId" element={<Wishlist currentUser={currentUser}/>} /> */}
            
        </Routes>
    )
}