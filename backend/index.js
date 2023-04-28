const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


app.get((req,res)=>{
    res.send("Welcome to Todo app backend!");
});


app.listen(8800, ()=>{
    console.log("App is running at port 8800");
})