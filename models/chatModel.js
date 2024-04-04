import mongoose from "mongoose"


const chatSchema=new mongoose.Schema({
  user1:{
  id:{type:String,required:true},
  name:{type:String,required:true},
  avatar:{type:String}
  },
  user2:{
 id:{type:String,required:true},
  name:{type:String,required:true},
  avatar:{type:String}
  }
})

export const chatModel=mongoose.model("chat",chatSchema);
