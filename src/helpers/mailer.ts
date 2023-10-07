import nodemailer from 'nodemailer'

import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';
var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "ba7a8f20bee0a3",
              pass: "012ae299505206"
              
            }
          });
export const sendEmail=async({email,emailType,userId}:any)=>{
    try{
        // console.log(email+emailType+userId);
    //     //create a hashed token
    //    const hashedToken=await bcryptjs.hash(userId.toSting(),10);

    //   if(emailType==="VERIFY")
    //    {await User.findByIdAndUpdate(userId,{verifyToken:hashedToken,verifyTokenExpiry:Date.now()+3600000});}
    //     else if(emailType==="RESET"){
    //    await User.findByIdAndUpdate(userId,{forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry:Date.now()+3600000});

    //     }
        
          const mailOptions={
            from: '',
            to:'kuku',
            subject:"Verify your email",
            html:`<p>Click to ${"Verify your email"}</p>`

          }
         await transport.sendMail({
            from: 'Kobra@mail', 
            to: "bar@example.com", // list of receivers
            subject: "Verify Your Email", // plain text body
            html: `<h1  className="mt-9 text-lg  bg-lime-400 text-black p-4 rounded-3xl pt-2 pb-2 font-bold">KobRa.
            </h1>
            <b>Click to ${"Verify your email"}</b>`, // html body
          });
        
    }
    catch(error:any){
        console.log("Error sending email:");
    throw error;
    }
}
