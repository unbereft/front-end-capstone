import "../styles/Plants.css"


export const SearchBar = ({searchTerm, setSearchTerm}) => {

    return (
        <>
            <div className="search-box">
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