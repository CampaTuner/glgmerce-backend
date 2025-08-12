let express = require('express')
let app = express()
let dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db.config')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let buyerRoute = require('../NEM/routes/buyer.route')
app.use('/api/buyer', buyerRoute)
let sellerRoute = require('../NEM/routes/seller.route')
app.use('/api/seller', sellerRoute)
let productRoute = require('../NEM/routes/product.route')
app.use('/api/product', productRoute)

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })


