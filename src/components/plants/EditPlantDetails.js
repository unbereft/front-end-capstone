// Given the path navigates to /plants/${plant.id}
// When you click Edit Plant
// Then the path will navigate to /plants/${plant.id}/edit

import { PlantForm } from "./PlantForm"

// PUT method - update

export const EditPlantDetails = ({currentUser}) => {
    
    
    return (
        <><h2>Edit Plant Details</h2>
        <PlantForm type="edit" currentUser={currentUser} /></>
    )
}