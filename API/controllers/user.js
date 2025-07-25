import { User } from "../models/User.js";

export const register=async(req,res)=>{
    const {name,eamil,password}=req.body;
    try{

        let user=await User.create({
            name,
            email,
            password,
        });
        res.json({message:"User registered successfully",success:true});

    }catch(error){

        res.json({message:error.message})

    }
};