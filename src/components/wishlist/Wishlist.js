import { useState, useEffect, useContext } from "react"
import { deleteWishlistItem, getWishlistByUserId } from "../services/wishlistService"
import { UserContext } from "../views/ApplicationViews"
import { getAllUsers } from "../services/userService"
import { Link, useParams } from "react-router-dom"

export const Wishlist = () => {
    const [wishlists, setWishlists] = useState([])
    const currentUser = useContext(UserContext)
    const [users, setUsers] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getWishlistByUserId(id).then(data => {
            setWishlists(data)
        })
    }, [id])



    const handleDelete = async (wishlistId) => {
        await deleteWishlistItem(wishlistId)
        getWishlistByUserId(id).then(data => {
            setWishlists(data)
        })
    }

    useEffect(() => {
        getAllUsers().then(data => {
            setUsers(data)
        })
    }, [])


    return (
        <>
            <div className="wishlist-container">
                <h1>Wishlist</h1>
                {wishlists.map((wishlist, index) => {
                    return <div className="wishlist-item" key={wishlist.id}>
                        <p>{wishlist.plant.name}</p>
                        <button onClick={() => handleDelete(wishlist.id)}>🗑️</button>
                    </div>
                })}

            </div>

            <div className="others-wishlists">
                <h2>Check out your friends' wishlists!</h2>
                {users.map((user) => {
                    return <div className="others-wishlist-item" key={user.id} >
                        <Link to={`/wishlist/${user.id}`}> {user.name} </Link> </div>
                })}
            </div >
        </>
    )
}

// ? What steps do I need to take to render this page?
// get Wishlist by userId -> wishlist object is expanded
