const Filter = (props) => {


  const filterName = (people,textFilter)=> {
    return people.filter(p => p.name.toLowerCase().includes(textFilter.toLowerCase()))
  }
  const objFilterNames = filterName(props.persons,props.filterText)
  


  return (
    
    <div>
      
        {objFilterNames.map(i=> 
         <div key={i.name}>
         <p>{i.name} {i.phone}</p>
          </div>
         )}
        
    </div>
   
  )

}

export default Filter