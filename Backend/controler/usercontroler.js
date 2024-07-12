import User from "../model/user.model.js"

export const create = async(req,res)=>{
    try {
        const userdata = new User(req.body);

        if(!userdata){
            return res.status(404).json({msg:"User data not Found"})
        }
        const savedata = await userdata.save();
        res.status(200).json(savedata);

    } catch (error) {
        res.status(500).json({error: error})
    }
}



export const getAll = async(req,res)=>{
    try {
        
        const userData = await User.find()
        if(!userData){
            return res.status(404).json({msg:"User data not found"})
        }
        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json({error: error})
    }
}


export const getOne = async(req,res)=>{
    try {
        const id=req.params.id;
        const userExist = await User.findById(id)
        if(!userExist){
            return res.status(404).json({msg:"user not existe"})
        }
        res.status(200).json(userExist)

    } catch (error) {
        res.status(500).json({error: error})
    }
}


export const update = async (req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"User nout found"})
        }
        const updatedData = await User.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedData)
    } catch (error) {
        res.status(500).json({error: error})
    }
}


export const deleteuser = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(401).json({msg:"User is not found"})
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({msg:"User deleted successfully"})
    } catch (error) {
        res.status(500).json({error: error})
    }
}