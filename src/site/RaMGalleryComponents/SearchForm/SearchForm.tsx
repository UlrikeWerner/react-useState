export default function SearchForm({search, setSearch}: any) {

    return (
        <>
            <form>
                <label>
                    search name: {" "}
                    <input type="text"
                           name="search"
                           value={search}
                           onChange={event => {setSearch(event.target.value)}}/>
                </label>
            </form>
        </>
    )
}