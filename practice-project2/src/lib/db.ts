import { connect } from "mongoose"

const mongodburl = process.env.MONGODB_URL
if(!mongodburl){
    throw new Error("mongodb url is not found.")
}

 let cached = global.mongoose

if(!cached){
   cached =   global.mongoose = {conn : null ,promise : null}
}

const connectDb = async ()=>{
    if(cached.conn){
        console.log("cached se db connect")
        return cached.conn
    }

    if(!cached.promise){
       cached.promise =  connect(mongodburl).then((c)=>c.connection)
    }

    try {
       cached.conn =  await cached.promise
       console.log("Db connected from promise")
    } catch (error) {
        throw error
    }
    return cached.conn
}

export default connectDb