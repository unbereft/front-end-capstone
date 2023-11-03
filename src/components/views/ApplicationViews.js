import { Route, Routes, Outlet } from "react-router-dom"
import { useState, useEffect } from 'react'
import { NavBar } from "../nav/NavBar"
import { MyHouseplants } from "../plants/MyHouseplants"
import { AllPlants } from "../plants/AllPlants"
import { PlantDetails } from "../plants/PlantDetails"
import { AddPlant } from "../plants/AddPlant"
import { EditPlantDetails } from "../plants/EditPlantDetails"
import { Wishlist } from "../wishlist/Wishlist"
import { createContext } from "react"

export const UserContext = createContext()

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})


    useEffect(() => {
        const localHouseplantUser = localStorage.getItem("houseplant_user")
        const houseplantUserObject = JSON.parse(localHouseplantUser)
        setCurrentUser(houseplantUserObject)
    }, [])


    return (
        <UserContext.Provider value={currentUser} >
            <Routes>
            <Route path="/"
                element={
                    <>
                        <NavBar />
                        <Outlet />
                    </>
                }
            >
                <Route index element={<MyHouseplants />} />
                <Route path="/plants" element={<AllPlants />} />
                <Route path="/plants/:plantId" element={<PlantDetails />} />
                <Route path="/plants/:id/edit" element={<EditPlantDetails  />} />
                <Route path="plants/add" element={<AddPlant />} />
                <Route path={`/wishlist/:id`} element={<Wishlist />} />
            </Route>

            </Routes>
        </UserContext.Provider>
    )
}