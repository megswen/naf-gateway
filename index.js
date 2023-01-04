const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

let port = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TEST ROUTE
const { setHSContactPartnerIdMiddleware } = require('./middlewares/contactMiddleware');
app.use('/middleware-test', setHSContactPartnerIdMiddleware);

app.listen(port, async() => {
    try {
        console.log('Listening on port #' + port);
    } catch (error) {
        console.log(error);
    }
});

module.exports = app;