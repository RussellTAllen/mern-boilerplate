const path = require('path')
const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req, res)=>{
        try{
            let todos = await Todo.find()
            res.render(path.join(__dirname , 'src', 'App.js'), {
                todos: todos
            })
        }catch(err){
            console.error('Not serving App.js')
        }
    }
}