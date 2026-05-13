import { NextAuthOptions } from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import connectDb from "./db"
import User from "@/model/user.model"
import bcrypt from "bcryptjs"

const authOptions : NextAuthOptions={
     providers:[
        //login kaise kroge
        CredentialsProvider({
            name : "Credentials",
            credentials : {
                email : {label:'Email',type : 'text'},
                password : {label : 'Password',type : 'password'}
            },
            async authorize(credentials,req){
                if(!credentials){
                    throw new Error("Credentials not found");
                }
                const {email , password} = credentials
                if(!email || !password){
                    throw new Error ("email or password is not found")
                }
                await connectDb()
                const user = await User.findOne({email})
                if(!user){
                    throw new Error ("user not found")
                }
                const isMatched = await bcrypt.compare(password,user.password)
                if(!isMatched){
                    throw new Error("incorrect password")
                }

                return {
                    id : user._id,
                    name : user.name,
                    email : user.email,
                    image : user.image
                }

            },
        })
     ],
     callbacks:{
        //sabhi details jo sign in krne pr mili thi vo sab token me transfer kr di
        async jwt({token,user}){
            if(user){
                token.id = user.id
                token.name = user.name
                token.email = user.email
                token.image = user.image
            }
            return token
        },
        //session ke ander user ki details daldenge
        session({session,token}){
            if(session.user){
                session.user.id = token.id as string
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.image as string
            }
            return session
        }
     },
     session:{
        //frontend me only session accesss hota h token nhi
        strategy : 'jwt',
        maxAge : 30*24*60*60*1000 //30 days in milisecond after which we have to login again
     },
     pages:{
        signIn : '/login',
        error : '/login'
     },
     secret : process.env.NEXT_AUTH_SECRET
}
export default authOptions