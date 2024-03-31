const { log } = require("console");
const express = require("express")
const http = require("http")
const port = "3000"

const app = express();

/* Middkewares */
app.use(express.json())


app.get("/", (req, res) => {
    res.status(200).json({
        name: "Sebastian",
        lastname: "Contreras"
    })
})

const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server working on port http://localhost:" + port);
})