const FilterInput = ({handleFilter}) =>{
    return(
<div>
        filter shown with: <input onChange={handleFilter}/>
      </div>
    )

}

export default FilterInput