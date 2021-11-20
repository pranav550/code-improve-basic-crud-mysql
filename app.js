const express = require("express");
const route = require("./routes");
const app = express();
const PORT = 8080;


app.use('/users', route);



app.listen(PORT, () => {
    console.log("server start on 8080")
})