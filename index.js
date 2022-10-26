const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.port || 5000
app.use(cors())

const course = require("./data/course.json")
const categories = require("./data/categories.json")

app.get('/', (req, res) => {
  res.send('Hello World from node running on node!')
})
app.get('/course-categories',(req,res) => {
    res.send(categories)
})
app.get('/course/:id',(req,res)=>{
    const id = req.params.id;
    const categories_course = course.find(n => n.category_id === id)
        res.send(categories_course) 
})

app.get('/course',(req,res) => {
    res.send(course)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})