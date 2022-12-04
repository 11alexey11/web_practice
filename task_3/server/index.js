const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { LocalStorage } = require('./modules/localStorage');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const localStorage = new LocalStorage();

app.post('/todos', (req, res) => {
    const user = req.body.user;

    if (localStorage.getItem(user) === null) {
        localStorage.setItem(user, []);
    }
    res.send({ todos: localStorage.getItem(user) });
});

app.listen(5000, () => {
    console.log('Server started!');
});
