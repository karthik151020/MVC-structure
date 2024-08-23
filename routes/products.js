const express=require("express")

const route=express.Router()

const products=[
    {
        productId:1,
        productName:"TV",
        price:50000
    },
    {
        productId:2,
        productName:"AC",
        price:45000
    },
    {
        productId:3,
        productName:"Phone",
        price:27000
    }
]

route.get("/",(req,res)=>{
    res.json(products);
})

route.get("/:id",(req,res)=>{
    const numb=parseInt(req.params.id)
    const val=products.find((values)=>(
        values.productId===numb
    ))
    console.log(val)
    res.json({a:val});
})

module.exports=route;