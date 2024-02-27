import mongoose, { Schema } from "mongoose";

const TodoModel = new Schema(
    {
       title: {
            type: String,
            required: true
       },
       desc: {
        type: String,
        required: true
       },
       expires: {
        type: Date,
        required: true,
        get: (expires) => moment(expires).format("YYYY-MM-DD HH:mm:ss")
       }
    })

const Todo = mongoose.model("Todo", TodoModel)

export default Todo