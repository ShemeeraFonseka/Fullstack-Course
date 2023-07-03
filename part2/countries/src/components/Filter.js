const Filter=({newFilter,filterByName})=>{
    return(
        <div>
            Find Countries:
            <input value={newFilter} onChange={filterByName}></input>
        </div>
    )
}
export default Filter;