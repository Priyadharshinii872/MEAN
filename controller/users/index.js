const service = require('./service')

//save
const save = async(req,res)=>
{
    try{

        const saveuser = await service.saveuser(req.body)
        res.send({
            code:200,
            status:true,
            message:'Saved Successfully',
            response:saveuser
        }) 

   }catch(error)
    {
        res.send({
            code:400,
            status:false,
            message:'Something went wrong!!!'
        })
    }   
    

   
    
}


//getusers
const get = async(req,res)=>
{
    // try{

        const get = await service.getuser();
    //     res.send({
    //         code:200,
    //         status:true,
    //         message:'users are:',
    //         response:get
    //     })

    // }catch(error)
    // {
    //     res.send({
    //         code:400,
    //         status:false,
    //         message:'Something went wrong!!!'
    //     })
    // }
    res.send(get)
}

module.exports = 
{
    save,
    get
}