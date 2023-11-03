// Given the path navigates to /plants/${plant.id}
// When you click Edit Plant
// Then the path will navigate to /plants/${plant.id}/edit

import { PlantForm } from "./PlantForm"

// PUT method - update

export const EditPlantDetails = () => {
    
    
    return (
        <><h2>Edit Plant Details</h2>
        <PlantForm type="edit"  /></>
    )
}

// I need to add some conditional logic so the "I own this" checkbox can only be interacted with if the currentUser.id === user.id