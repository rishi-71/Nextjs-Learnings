// In every route.ts file we can only create 4 apis get,put,post,delete and if we have to make more then simply create another folder then route file and create there because at something like user or any other role so we can only need to do these kinds of methods to operate
//IN this we dont need to name the function we just create a async type function with only type of method like get,put,post,delete

import { NextRequest, NextResponse } from "next/server";

//we get two object form next - NextRequest , NextResponse
export async function GET(){
    return NextResponse.json({
        name : "rishi",
        age:99
    })
}

export async function POST(request : NextRequest){
    const {name , age} = await request.json()
    return NextResponse.json({
        name,age
    })
}