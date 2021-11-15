const express = require("express")
const app = express()
const PORT =3000
app.get('/',(req,res)=>{
    res.send("<h1>Wolcome to my broo</h1>\n ")
})
app.listen(PORT,() =>{
    console.log("connected at port ${PORT}")
})