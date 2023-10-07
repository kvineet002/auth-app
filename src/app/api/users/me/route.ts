import { getDataFromToken } from "@/helpers/getDatafromToken";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbconfig/dbConfig";
connect()
export async function GET(request:NextRequest) {
    try{
        const userId=await getDataFromToken(request);
      const user=await  User.findOne({_id:userId}).
      select("-password");
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
    return NextResponse.json({
    message:"user found",
    data:user
})



    }
    catch(error:any){
        return NextResponse.json({error:error.message},{status:400});
    }
}