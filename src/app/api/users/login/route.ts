import {connect} from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()
export async function POST(request:NextRequest) {
    try{
        const reqBody=await request.json()
        const {email,password,isVerified}=reqBody;
        console.log("hello world"+reqBody);
        //check if user exists
        const user=await User.findOne({email})
        if(!user){
            return NextResponse.json({
                error:"user does not exist"            
            },{status:400})
        }
        
        if(!user.isVerified){
            return NextResponse.json({
                error:"user is not verified"            
            },{status:400})
        }
        // const verify=await 
        //check if password is correct
        const validPassword=await bcryptjs.compare
        (password,user.password)
        if(!validPassword){
            return NextResponse.json({error:"invalid password"},{status:400})
        }
        //crete token data
        const tokendata={
            id:user._id,
            username:user.username,
            email:user.email

        }
        //create token
        const token=await jwt.sign(tokendata,process.env.TOKEN_SECRET!,{expiresIn:"1d"})
    
    const response=NextResponse.json({
        username:user.username,
        isVerified:user.isVerified,
        message:"login successfull",
        success:true,
    })
    response.cookies.set("token",token,{
        httpOnly:true,
    })
    return response;
    }
    catch(error:any){
        return NextResponse.json({error:error.message},{status:500})
    }


}