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

function getAll(req,res){
    return res.json(users);
}

const getById = (req,res)=>{
    const numb=parseInt(req.params.id)
    const val=users.find((values)=>(
        values.userId===numb
    ))
    return res.json(val);
}

const deleteById = (req, res) => {
    return res.json({ MSG: "deleted successfully" });
}


module.exports={getAll,getById,deleteById}