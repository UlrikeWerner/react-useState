export default function SearchForm({search, setSearch}: any) {

    return (
        <>
            <form>
                <label htmlFor="searchName">
                    search name: {" "}
                </label>
                <input
                    id="searchName"
                    type="text"
                    name="search"
                    value={search}
                    onChange={event => {setSearch(event.target.value)}}/>

            </form>
        </>
    )
}