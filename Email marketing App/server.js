// "type": "module",

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');

//* init app
const app = express();
const path = require("path")
const port = process.env.PORT || 5000;
const clientRouter = require("./routes/client");

//* dotenv config
// require("dotenv").config();
require("dotenv").config({path:'./config/.env'});

//* connecting database
// mongoose.connect(process.env.DATABASE_URI || "mongodb://localhost/bleses", { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(process.env.DATABASE_URI, () => console.log('Mongodb connected'))
    .catch(err => {
        console.log(err);
    });

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//* template engine
app.set("view engine", "hbs");

//* Middlewares
app.use("", clientRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client", "build")))

//* create a GET route
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.get("/software-development", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.get("/it-support", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//* create a GET route (Error)
app.use("*", (req, res) => {
    res.status(404).json({ error: "not found"});
});
//?
// app.use("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

//* This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));