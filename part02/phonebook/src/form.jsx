
const PersonsForm = ({addName, handleName,handlePhone,newName,newPhone}) => {
    return (
    
    <form onSubmit={addName}>
        <h2>add a nwe</h2>
        <div>
          name: <input onChange={handleName} value={newName}/>
        </div>
        <div>
          number: <input onChange={handlePhone} value={newPhone} />
        </div>
        <div>
          <button  type="submit">add</button>
        </div>
      </form>
      )

}

export default PersonsForm