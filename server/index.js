const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/mergeRoutes')
const cookieParser = require('cookie-parser')
require('dotenv').config()



const errorHandler = require('./middleware/errorHandlingMiddleware')
const PORT = process.env.PORT || 5000



const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(errorHandler)
app.use('/universystem', router)


const start = async () => {
    
    try {
        
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, ()=>console.log('App has been started on port:', PORT))

    } catch (e) {
        console.log(e)
    }
}

start()