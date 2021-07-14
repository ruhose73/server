require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

const start = async () => {
    
    try {
        await mongoose.connect('mongodb+srv://ruhose73:chegevara3000@cluster0.7zmzo.mongodb.net/university_ecosystem?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        app.listen(PORT, ()=>console.log('App has been started on port:', PORT))

    } catch (e) {
        console.log(e)
    }
}

start()