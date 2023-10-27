export const getAllPosts = () => {
    return fetch(`http://localhost:8088/posts?_expand=topic&_expand=user`).then((res) => res.json()
    )
}

export const getPostsByUserId = (id) => {
    return fetch(`http://localhost:8088/posts?id=${id}&_expand=topic&_expand=user`).then((res) => res.json()
    )
}

