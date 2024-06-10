const express = require("express")
const mongoose = require("mongoose");
const itemRoute = require("./src/routes/itemRoute");
const app = express();
const cors = require("cors")
const PORT = process.env.PORT || 8000
const DB_USERNAME = process.env.DB_USERNAME || "deep"
const DB_PASSWORD = process.env.DB_PASSWORD || "ccZsR4h20Q6OrD2o"

app.use(express.json())
app.use(cors())
app.use("/api", itemRoute)

async function main() {
    await mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@veggify-recipe.nseka5i.mongodb.net/?retryWrites=true&w=majority&appName=veggify-recipe`)
}

main().then(() => console.log("db connected ")).catch(err => console.log("err", err))


app.get("/", (req, res) => {
    res.send("Veggify Recipe App Server is Running")
})

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})