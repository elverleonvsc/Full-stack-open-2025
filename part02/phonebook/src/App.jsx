import { useState, useEffect, act } from 'react'
import Filter from './filter'
import PersonsForm from './form'
import FilterInput from './filterInput'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterText, setFilter] = useState('')
 
  useEffect( () => {
    axios
    .get('http://localhost:3001/persons')
    .then( result => setPersons(result.data)
    )
  },[])
  

  
  const addName = (e)=> {
   e.preventDefault()
    if (!newName.trim()) return 
   const repeatName =  persons.some(sameName => sameName.name === newName)
   
   if (repeatName) {
     alert(`${newName} is already added to phonebook`)
   } else {
    
 const newObjNames = {
    name: newName,
    number: newPhone,
    id: persons.length + 1
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