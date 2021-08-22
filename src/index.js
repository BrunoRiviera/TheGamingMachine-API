// Levantar el server con nodemon en el index, para asi poder usar la API !

require('./db/mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const Dish = require('./model/games');

app.use(express.json());

app.get (`/`, (req, res) =>{
    res.send(`API THEGAMINGMACHINE`)
});
// Read-- Mostrar todos los platos
app.get('/games', (req, res) => {
    Dish.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

// Create -- Agregar Platos a la DB
app.post('/game', (req, res) => {
    const game = new Game(req.body)
    game.save()
        .then(() => {
            res.status(201).send(game);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
});

// app.delete(`/dish/:id`, (req, res) => {
// });

// Update
// app.update()

// Delete
// app.delete()

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});
