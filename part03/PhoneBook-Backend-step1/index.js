
const express = require('express')

const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())

var morgan = require('morgan')

morgan.token('body', req => JSON.stringify(req.body))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.use(express.static('dist'))

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]


  let notes = [
    {
      "id": "1",
      "content": "HTML is easy",
      "important": true
    },
    {
      "id": "2",
      "content": "Browser can execute only JavaScript",
      "important": false
    },
    {
      "id": "3",
      "content": "GET and POST are the most important methods of HTTP protocol",
      "important": false
    },
    {
      "id": "db92",
      "content": "this is a note",
      "important": false
    },
    {
      "id": "3df1",
      "content": "dsa",
      "important": true
    },
    {
      "id": "48d5",
      "content": "",
      "important": false
    }
  ]


const time = new Date()

const total = persons.length



app.get('/', (resquest,responde) => {
    responde.send('Hello backend, elver')

})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})


app.get('/api/persons/:id', (req, res) => {

  const id = req.params.id
  const person = persons.find(p => p.id === id)
  if (person) {
 res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req,res) => {
  const id = req.params.id
  persons = persons.filter(p => p.id !== id)


  res.json(persons)
})

const generateId = ()=>{
   return Math.random() * 10000
  
}



app.post('/api/persons' ,(req,res)=> {
  const body = req.body

  const sameName = persons.find(p=> p.name === body.name)

  if (!body.name || !body.number) {
    return res.status(400).json({ error: 'name or number is missing' })
  }
  else if (sameName){
    return res.status(400).json({ error: 'name must be unique'})
   
  
  } else {
 const person = {
    name:body.name,
    number:body.number,
    important:body.important,
    id:generateId()
  }
  persons = persons.concat(person)
  res.json(person)
  }
  
   
})





app.get('/info', (req,res) => {
  res.send(`
    <p>Phonebook has in for ${total} people</p>
    <p>${time}</p>
    `)
   
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
    
})