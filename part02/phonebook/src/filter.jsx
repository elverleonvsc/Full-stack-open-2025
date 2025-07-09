const Filter = (props) => {


  const filterName = (people,textFilter)=> {
    return people.filter(p => p.name.toLowerCase().includes(textFilter.toLowerCase()))
  }
  const objFilterNames = filterName(props.persons,props.filterText)
  
 

  return (
    
    <div>
      
        {objFilterNames.map(i=> 
         <div key={i.id}>
          <div>
            {i.name} {i.number} 
            <button onClick={()=> props.onDelete(i.id)}>delete</button>
          </div>
         

         
          </div>
         )}
        
    </div>
   
  )

}

export default Filter