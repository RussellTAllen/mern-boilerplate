const path = require('path')
const Todo = require('../models/Todo')


module.exports = {
    getTodos: async (req, res)=>{
        try{
            let todos = await Todo.find()
            let todosCount = await Todo.countDocuments()
            res.json({
                todos: todos,
                count: todosCount
            })
            
        }catch(err){
            console.error('Not serving App.js')
        }
    }
}