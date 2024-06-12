const express = require("express")
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT || 8000
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

const itemRoute = require("./src/routes/itemRoute");
const categoryRoute = require("./src/routes/categoryRoute")



app.use(express.json())
app.use(cors())
app.use("/api", itemRoute)
app.use("/api", categoryRoute)

async function main() {
    await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@veggify-recipe.nseka5i.mongodb.net/?retryWrites=true&w=majority&appName=veggify-recipe`)
    //     await mongoose.connect(`mongodb://127.0.0.1:27017/veggify-recipe`)
}

main()
    .then(() => console.log("db connected "))
    .catch(err => console.log("err", err))


app.get("/", (req, res) => {
    res.send("Veggify Recipe App Server is Running")
})

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})