export const getWishlistByUserId = (userId) => {
    return fetch(`http://localhost:8088/wishlist?userId=${userId}&_expand=user&_expand=plant`).then((response) => response.json())
}

export const updateWishlist = (wishlistObj) => {
    return fetch(`http://localhost:8088/wishlist`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(wishlistObj),
    }).then((res) => res.json())
}

export const deleteWishlistItem = (wishlistId) => {
    return fetch(`http://localhost:8088/wishlist/${wishlistId}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })
}