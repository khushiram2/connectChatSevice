import express from "express"
import * as dotenv from "dotenv"
import databseConnection from "./database/dbconnection.js"
import startevent from "./socketEvents/events.js";
dotenv.config()
await databseConnection();

const app=express()










const server=app.listen(process.env.PORT,()=>console.log("app started at http://localhost:"+process.env.PORT))
startevent(server)
