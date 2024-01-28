const express = require('express');

const router = express.Router();


const TODOS = [
    {
      id: 1,
      name: 'Learn Node',
      done: false,
    },
    {
      id: 2,
      name: 'Learn Express',
      done: false,
    },
  ];

router.get('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    if (id < TODOS.length) {
        res.send(TODOS[id]);
    } else {
        res.status(404).send('Todo not found');
    }
});

router.get('', (req, res) => {
    res.status(200).send('OK');
});

router.get('/api/todos', (req, res) => {
    res.status(200).send(TODOS);
});

router.post('/api/todos', (req, res) => {
    const newTodo = req.body;
    newTodo.id = TODOS.length + 1; // Dynamic ID
    TODOS.push(newTodo);
    res.status(201).send(newTodo);
});

router.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodo = req.body;
    const index = TODOS.findIndex(todo => todo.id === id);
    if (index !== -1) {
        TODOS[index] = { ...TODOS[index], ...updatedTodo };
        res.send(TODOS[index]);
    } else {
        res.status(404).send('Todo not found');
    }
});


router.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = TODOS.findIndex(todo => todo.id === id);
    if (index !== -1) {
        TODOS.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Todo not found');
    }
});

module.exports = router;