let express = require('express')
let app = express()
let dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db.config')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors({
    origin: '*',
}))


let buyerRoute = require('./routes/buyer.route')
app.use('/api/buyer', buyerRoute)
let sellerRoute = require('./routes/seller.route')
app.use('/api/seller', sellerRoute)
let productRoute = require('./routes/product.route')
app.use('/api/product', productRoute)

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })


