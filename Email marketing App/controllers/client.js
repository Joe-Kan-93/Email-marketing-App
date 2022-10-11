const nodemailer = require("../nodemailer");
const { body, validationResult } = require("express-validator");

const Client = require("../models/client");

//* Client {Software_development} creation & validation
exports.createSoftware_developmentClient = (req, res) => {
    //* Array
    let clients = [];
    //* check validation
    body("fullName", "Name is empty").notEmpty(),
    body("email")
        .notEmpty()
        .withMessage("Email is Empty")
        .isEmail()
        .withMessage("Please give valid Email");
    //* Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        const newClient = new Client({
            fullName: req.body.fullName,
            email: req.body.email,
            video: req.body.video,
            firstDate: req.body.firstDate,
            firstDateEmail: req.body.firstDateEmail,
            firstDateEvent: req.body.firstDateEvent,
            secondDate: req.body.secondDate,
            secondDateEmail: req.body.secondDateEmail,
            secondDateEvent: req.body.secondDateEvent,

            created: Date.now()
        });
        clients.push(newClient);
        console.log('Client created!');
        // console.log(clients)
        console.log(newClient);

        newClient.save((err, data) => {
            data = req.body
            console.log(data);
            if (err) throw err;
        });

        nodemailer.sendBlesesEmail(
            newClient.email,
            newClient.video,
            newClient.firstDateEmail,
            newClient.firstDateEvent,
            newClient.secondDateEmail,
            newClient.secondDateEvent
        );
    }
};

//* Client {IT_support} creation & validation
exports.createSmartClient = (req, res) => {
    //* Array
    let clients = [];
    //* check validation
    body("fullName", "Name is empty").notEmpty(),
    body("email")
        .notEmpty()
        .withMessage("Email is Empty")
        .isEmail()
        .withMessage("Please give valid Email");
    //* Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        const newClient = new Client({
            fullName: req.body.fullName,
            email: req.body.email,
            video: req.body.video,
            firstDate: req.body.firstDate,
            firstDateEmail: req.body.firstDateEmail,
            firstDateEvent: req.body.firstDateEvent,
            secondDate: req.body.secondDate,
            secondDateEmail: req.body.secondDateEmail,
            secondDateEvent: req.body.secondDateEvent,

            created: Date.now()
        });
        clients.push(newClient);
        console.log('Client created!');
        // console.log(clients)
        console.log(newClient);

        newClient.save((err, data) => {
            data = req.body
            console.log(data);
            if (err) throw err;
        });

        nodemailer.sendSmartEmail(
            newClient.email,
            newClient.video,
            newClient.firstDateEmail,
            newClient.firstDateEvent,
            newClient.secondDateEmail,
            newClient.secondDateEvent
        );
    }
};