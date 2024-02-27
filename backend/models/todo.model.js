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
        required: true
       }
    })

const Todo = mongoose.model("Todo", TodoModel)

export default Todo