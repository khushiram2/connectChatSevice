import mongoose from "mongoose"



const messageSchema=new mongoose.Schema({
  chatId:{type:mongoose.schema.Types.ObjectId,required:true,ref:"chat"},
  senderId:{type:String,required:true},
  content:{type:String,required:true}
})

export const messageModel=mongoose.model("messages",messageSchema);
