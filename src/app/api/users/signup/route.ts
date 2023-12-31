import {connect} from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import nodemailer from 'nodemailer';
import { sendEmail } from "@/helpers/mailer";
connect()
export async function POST(request: NextRequest, response: NextResponse): Promise<void | Response> {
    try{
        const reqBody=await request.json()
        const {username,email,password} =reqBody;
        console.log(reqBody);
        
        //searching user in database
        const user=await User.findOne({email});
        if(user){
            return NextResponse.json({error:"User already exists"},{status:400})
        }

        //hash password
        const salt=await bcryptjs.genSalt(10)
        const hashedPassword =await bcryptjs.hash
        (password,salt)
        
        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })
        const savedUser=await newUser.save();
        
        console.log(savedUser);
        //send verification email
        await sendEmail({emai:email,emailTyp:"VERIFY",userI:savedUser._id});
        
        return NextResponse.json({
            message:"user created successfully",
            success:true,
            savedUser
        })
        
    }
    
    
    catch(error:any){
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
