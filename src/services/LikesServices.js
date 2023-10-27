// when a post is liked
// make api call to server to add a new entry to favorites
// associate the userId and postId
// to display likes, query the likes table for the count of likes associated with each post ( .length?)
// implement logic that prevents user from liking the post multiple times & handle unliking posts

export const getNumberOfLikes = () => {
    return fetch(`http://localhost:8088/favorites?_expand=post`).then((res) => res.json())
}

export const updateLikeRelationship = (post) => {
    return fetch(`http://localhost:8088/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    }).then((res) => res.json())
}