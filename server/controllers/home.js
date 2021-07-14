const path = require('path')
const Todo = require('../models/Todo')

module.exports = {
    getIndex: async (req, res)=>{
        try{
            const todos = await Todo.find()
            res.render(path.join(__dirname , 'src', 'App.js'),{
                todos: todos
            })
            console.log(todos)
        }catch(err){
            console.error('Not serving App.js')
        }
    }
}