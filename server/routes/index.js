const { Router } = require('express');
const exampleRouter = require('./_example');
const homeController = require('../controllers/home')
const todosController = require('../controllers/todos')
const router = Router();

router.use('/example', exampleRouter);
router.get('/', homeController.getIndex)
router.get('/todos', todosController.getTodos)


module.exports = router;