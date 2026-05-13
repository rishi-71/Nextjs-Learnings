import connectDb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";
export async function POST(request : NextRequest){
    try {
        const {name , email ,password} =  await request.json() // fronted se data receive ho rha h
        await connectDb(); //database connect krna h hr api run pe
        const existUser = await User.findOne({email});
        if(existUser){
            return NextResponse.json(
                {message : "user already exist with this email "},
                {status : 400}
            )
        }
        if(password.length < 6){
            return NextResponse.json(
                {message : "password must be of at least 6 length"},
                {status : 400}
            )
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.create({
            name,
            email,
            password : hashedPassword
        })

        return NextResponse.json(
            user,
            {status : 201}
        )


    } catch (error) {
        return NextResponse.json(
            {message : `register error ${error}`},
            {status : 500}
        )
    }
}