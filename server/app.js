const express = require('express')
const swaggerUI=require('swagger-ui-express')
require('dotenv').config()
const sequelize = require('./config/db')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const router = require('./routes/mergeRoutes')
const swaggerJsDoc = require('swagger-jsdoc')
const errorMiddleware = require('./middlewares/errorMiddleware')

const config = {
    definition: {
        openapi: "3.0.0",
        info: {
            title:"Экосистема ИАТЭ",
            version: "1.0.0",
            description: "Система для удаленного обучения студентов"
        },
        servers: [
            {
                url:"http://localhost:5000"
            }
        ]
    },
    apis: ["./documentation/*.js"]
}

const specs = swaggerJsDoc(config)

const app = express()
app.use(cors())
app.use(express.json())

//  http://localhost:5000/ecosystem
app.use('/ecosystem', router)
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(specs))
app.use(errorMiddleware)


const start = async () => {
    try {

        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log('App has been started on port: ',PORT))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}
start()