const Filter = (props) => {


  const filterName = (people,textFilter)=> {
    return people.filter(p => p.name.toLowerCase().includes(textFilter.toLowerCase()))
  }
  const objFilterNames = filterName(props.persons,props.filterText)
  


  return (
    
    <div>
      
        {objFilterNames.map(i=> 
         <div key={i.id}>
         <p>{i.name} {i.number}</p>
          </div>
         )}
        
    </div>
   
  )

}

export default Filter