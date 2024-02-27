import mongoose from "mongoose";

const ConnectDB = () => {
    mongoose
        .connect(process.env.MONGO_DB_URI)
        .then(() =>{
            console.log("Connected to DB")
        })
        .catch((err) =>{
            console.log(err)
        })
}

export default ConnectDB