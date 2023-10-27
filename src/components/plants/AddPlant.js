import { PlantForm } from "./PlantForm"

export const AddPlant = ({currentUser}) => {


    return (
        <>
            <h2>Add New Houseplant</h2>
            <PlantForm type="add" currentUser={currentUser} />
        </>
    )
}


