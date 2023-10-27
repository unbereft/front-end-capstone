export const getPlantsByUserId = (userId) => {
    return fetch(`http://localhost:8088/plants?_expand=user&userId=${userId}&_expand=location`).then((res) => res.json()
    )
}

export const getAllPlants = () => {
    return fetch (`http://localhost:8088/plants?_expand=user&_expand=location`).then((res) => res.json()
    )
}

export const getPlantsById = (plantId) => {
    return fetch (`http://localhost:8088/plants/${plantId}/?_expand=location`).then((res) => res.json())
}

export const postHouseplant = (newPlant) => {
    return fetch (`http://localhost:8088/plants`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant)
    })
}


export const updatePlantById = (plant, id) => {
    return fetch (`http://localhost:8088/plants/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json"}, 
        body: JSON.stringify(plant, id)
    })
}

export const deletePlantById = (plant) => {
    return fetch(`http://localhost:8088/plants/${plant.id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(plant)
    })
}