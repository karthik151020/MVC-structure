const express=require("express")
const route=express.Router()

let users=[
    {
        userId:1,
        userName:"Karthik",
        mail:"abc@gmail.com"
    },
    {
        userId:2,
        userName:"john",
        mail:"1234@gmail.com"
    },
    {
        userId:3,
        userName:"bob",
        mail:"dlj@gmail.com"
    }
]

route.use((req,res,next)=>{
    console.log("middleware use");
    next();
})
route.get("/",(req,res)=>{
    res.send(users);
});

route.get("/:id",(req, res) => {
    res.json((users[parseInt(req.params.id)]));
})

route.delete("/deleteuser/:id", (req, res) => {
    console.log("DELETE request received for ID:", req.params.id);
    res.send("DELETE route is working.");
});


module.exports=route