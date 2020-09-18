import mongoose from 'mongoose';

const whatsappSchema=mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    received:Boolean
});

//collection of messages
export default mongoose.model("messagecontents",whatsappSchema);