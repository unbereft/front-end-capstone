import "./Search.css"


export const SearchBar = ({searchTerm, setSearchTerm}) => {

    return (
        <>
            <div className="search-bar">
                <input onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}
                    type="text"
                    className="search-box"
                    placeholder="Search Plants"
                    value={searchTerm}
                />
            </div>
        </>
    )
}