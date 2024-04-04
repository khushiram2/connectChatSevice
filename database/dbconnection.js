import mongoose from "mongoose"

async function databaseConnection() {
  try {
   await mongoose.connect(process.env.URL)
    console.log("db connected via mongoose ")
  } catch (error) {
    console.log(error)
  }
}

export default databaseConnection;
