require("dotenv").config()
const app = require("./middlewares/app.js")
const connectDb = require("./config/db.js")
connectDb()

app.listen(process.env.PORT, () => {
    console.log("Server is running on ", process.env.PORT );
})