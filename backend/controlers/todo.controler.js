import Todo from "../models/todo.model.js"

export const CreateTodo = async (req,res) => {
    try {
        if (
            !req.body.title ||
            !req.body.desc ||
            !req.body.expires
        ) {
            return res.status(400).json({message: "please complete all the fields"})
        }
        
        const newTodo = {
            title: req.body.title,
            desc: req.body.desc,
            expires: req.body.expires
        }

        const todo = await Todo.create(newTodo)

        return res.status(200).send(todo)

    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "internal server error"})
    }
}

export const GetTodo = async (req,res) => {
    try {
     const todos = await Todo.find({})
     return res.status(200).json({
        data: todos
     })
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "internal server error"})
    }
}

export const GetOneTodo = async (req,res) => {
    try {
        const {id} = req.params
        
        const todo = await Todo.findById(id)
        return res.status(200).json({data: todo})

    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "internal server error"})
    }
}

export const UpdateTodo = async (req,res) => {
    try {
        if (
            !req.body.title ||
            !req.body.desc ||
            !req.body.expires
        ) {
            return res.status(400).json({message: "send all requested fields"})
        }
        const {id} = req.params

        const result = await Todo.findByIdAndUpdate(id, req.body, {new: true})
        if (!result) {
            return res.status(400).json({message: "Todo not found"})
        }

        return res.status(200).send({message: "todo updated succesfully"})

    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "internal server error"})
    }
}

export const DeleteTodo = async (req,res) => {
    try {
        const {id} = req.params

        const result = await Todo.findByIdAndDelete(id)
        if (!result) {
            return res.status(404).json({message: "todo not found"})
        }

        return res.status(200).send({message: "todo deleted succesfully"})

    } catch (error) {
        console.log(error)
        return res.status(400).json({message: "internal server error"})
    }
}
