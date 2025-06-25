import { useState } from 'react'
import Filter from './filter'
import PersonsForm from './form'
import FilterInput from './filterInput'
const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterText, setFilter] = useState('')
 

  
  const addName = (e)=> {
   e.preventDefault()
    if (!newName.trim()) return 
   const repeatName =  persons.some(sameName => sameName.name === newName)
   
   if (repeatName) {
     alert(`${newName} is already added to phonebook`)
   } else {
    
 const newObjNames = {
    name: newName,
    phone: newPhone
   }
    setPersons(persons.concat(newObjNames))
   }
  setNewName('')
  setNewPhone('')
  
  }
  const handleName = (e)=> {
    setNewName(e.target.value)
  }
  const handlePhone = (e) =>{
     isNaN(e.target.value)  ? alert('Sorry, just numbers allow')  : setNewPhone(e.target.value)
  }
  const handleFilter = (e) => {
    setFilter(e.target.value)
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
    <FilterInput handleFilter = {handleFilter}/>
      
      <h2>Numbers</h2>
       
      <PersonsForm 
      addName= {addName} 
      newName={newName} 
      newPhone = {newPhone} 
      handleName = {handleName} 
      handlePhone = {handlePhone}/>

    
      <Filter persons = {persons} filterText = {filterText}/>
      
       
    </div>
    
  )
}

export default App