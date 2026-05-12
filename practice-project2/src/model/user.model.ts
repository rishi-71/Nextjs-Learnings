import mongoose from "mongoose";

interface Iuser {
    _id? : mongoose.Types.ObjectId;//ye id jo mongodb me jo object id hoti h vo h
    name : string;
    image : string;//cloudinary se url aayega string me
    email : string;
    password : string;
    createdAt? : Date;
    updatedAt? : Date
}

const userSchema = new mongoose.Schema<Iuser>({
    name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true,
    },
    image:{
        type : String,
    }
},{timestamps:true})

const User = mongoose.models?.User  ||  mongoose.model('User',userSchema) // this line prevents multiple times creation of usermodel it first checks if model already available it just export it otherwise it creates it
export default User;

//mongoose internally ek list me saare models ko store krleta h model object ke ander