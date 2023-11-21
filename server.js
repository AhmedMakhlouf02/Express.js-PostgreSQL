const express = require('express');
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 3000;


// Load config
dotenv.config({ path: "config.env" });

const studentRoutes = require('./src/routes');

app.use(express.json());
app.use('/api/v1/students', studentRoutes);


app.listen(PORT, ()=>{
    console.log(`App Listening on PORT ${PORT}`);
})
