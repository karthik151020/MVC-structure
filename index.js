const express = require('express')
const app = express()
const user=require("./routes/users.js")
const product=require("./routes/products.js")

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use("/users",user);
app.use("/products",product);

app.get("/ids",(req,res)=>{
    const id=req.query.id;
    const name=req.query.name;
    res.json(name)
})

app.listen(3000)

//breaks