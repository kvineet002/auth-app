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
export const sendEmail=async({emai,emailTyp,userI}:any)=>{
    try{
        //  console.log(emai+emailTyp+userI);
        // create a hashed token
       const hashedToken=await bcryptjs.hash(userI.toString(),10);

      if(emailTyp==="VERIFY")
       {await User.findByIdAndUpdate(userI,{verifyToken:hashedToken,verifyTokenExpiry:Date.now()+3600000});}
        else if(emailTyp==="RESET"){
       await User.findByIdAndUpdate(userI,{forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry:Date.now()+3600000});

        }
          const mailOptions={
            from: 'Kobra@mail', 
            to: emai,
            subject: emailTyp==="VERIFY"? "Verify Your Email":"Reset Your Password", 
            html: `<h1  className="mt-9 text-lg  bg-lime-400 text-black p-4 rounded-3xl pt-2 pb-2 font-bold">KobRa.
            </h1>
            <p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailTyp==="VERIFY"?"Verify your email":"Reset Your password"} </p>
            <p>{${process.env.DOMAIN}/verifyemail?token=${hashedToken}}</p>`, 
          };

         await transport.sendMail(mailOptions);
        
    }
    catch(error:any){
        console.log("Error sending email:");
    throw error;
    }
}
