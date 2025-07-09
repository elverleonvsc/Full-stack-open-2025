import { useState, useEffect, act } from 'react'
import Filter from './filter'
import PersonsForm from './form'
import FilterInput from './filterInput'
import phoneService from '../services/phoneService'
import Notification from './notificationAdd'

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filterText, setFilter] = useState('')
  const [notification, setNotification] = useState('')

  useEffect( () => {
    phoneService
    .getAll()
    .then(initialPhone => {
      setPersons(initialPhone)
    })
  },[])
  

 
  const addName = (e)=> {
   e.preventDefault()
    if (!newName.trim()) return 
   
   const existingPerson = persons.find(p => p.name === newName)
  
   
   const confirmPerson = ()=>{
    if (window.confirm(`${newName} is already added to phonebook`)){
      console.log('ok Save new number')
      const newObject = {
        name:existingPerson.name,
        number: newPhone
      }
      phoneService
      .updatePhoneNumber(existingPerson.id,newObject)
      .then(updatePhone => {
        setPersons(persons.map(p=> p.id !== existingPerson.id ? p : updatePhone))
        setNewName('')
        setNewPhone('')
        setNotification({message: `Changed ${existingPerson.name}´s number`, type: 'success'})
         setTimeout(()=> {
        setNotification(null)
      },2000)
      })
      .catch(error => {
        setNotification({ message: `Information of ${existingPerson.name} has already been removed from server`, type: 'error' })
        setPersons(persons.filter(p => p.id !== existingPerson.id))
        setTimeout(() => {
        setNotification(null)
        }, 5000)
      })
     
      
    }
   }

   if (existingPerson) {
   
  confirmPerson()
   } else {

 const newObjNames = {
    name: newName,
    number: newPhone,
   } 
   
   phoneService
   .create(newObjNames)
   .then(returnPhone => {
    setPersons(persons.concat(returnPhone))
   })
    setNewName('')
    setNewPhone('')
    setNotification({message:`Added ${newObjNames.name}`,type: 'success' })
    setTimeout(() => {
    setNotification(null)
   }, 2000);
   }
   

  
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
const handleDelete = (id) => {
  console.log('borrar', id);

  const person = persons.find(p => p.id === id)
if (window.confirm(`delete ${person.name}?`)){
phoneService
 .deletePhone(id)
 .then(() => {
 setPersons(persons.filter(p => p.id !== id))
 })
}
}


  return (
    <div>
      <h2>Phonebook</h2>
    <Notification message={notification}/>
    <FilterInput handleFilter = {handleFilter}/>
      
      <h2>Numbers</h2>
       
      <PersonsForm 
      addName= {addName} 
      newName={newName} 
      newPhone = {newPhone} 
      handleName = {handleName} 
      handlePhone = {handlePhone}/>

    
      <Filter persons = {persons} filterText = {filterText} onDelete={handleDelete}/>
      
       
    </div>
    
  )
}

export default App