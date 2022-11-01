const router = require('express').Router();
const bcrypt = require("bcrypt");
const { User } = require('../models');
const { emailIsValid, requestIsValid } = require('../utils/users');
require('dotenv').config();

const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;

router.get('/:email', async (req, res) => {
    try {
        const { email } = req.params;
        if (!emailIsValid(email)) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid email',
                data: {}
            });
        }
        const user = await User.findOne({
            where: {
                email: req.params.email
            }
        });
        if(!user) {
            return res.status(404).json({
                status: 404,
                message: 'User not found',
                data: {}
            });
        }          
        res.status(200).json({
            status: 200,
            message: 'User found',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error,
            data: {}
        });
    }
});

router.post('/', async (req, res) => {
    try {
        if(!requestIsValid(req.body)) {
            return res.status(400).json({
                status: 400,
                message: 'Invalid request',
                data: {}
            });
        }
        const exists = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(exists) {
            return res.status(409).json({
                status: 409,
                message: 'User already exists',
                data: {}
            });
        }
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
        req.body.password = hashedPassword;
        const user = await User.create(req.body);
        res.status(201).json({
            status: 201,
            message: 'User created',
            data: user
        });
    } catch (error) {   
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error',
            data: {}
        });
    }
});

module.exports = router;