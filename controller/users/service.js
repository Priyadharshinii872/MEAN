const userSchema = require('../../model/userschema')

//save

const saveuser = async(data)=>
{
   try
   {
        if(data.length!=0)
        {
            const newuser = new userSchema(data)
            const saveu =  await newuser.save();
            return saveu;
        }
   }catch(error)
   {
        return false;
   }
}

//getusers

const getuser = async(data)=>
{
    try
    {
        const get = await userSchema.find()
        return get;
    }
    catch(error)
    {
        return false
    }
}






module.exports=
{
    saveuser,
    getuser
}