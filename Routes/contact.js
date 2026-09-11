const express = require('express')

const { addUsers, getUsers, updateUser, getUserById, deleteUser } = require('../Controller/contact');


const CR = express.Router()

CR.post('/addusers',addUsers);
CR.get('/getusers',getUsers);
CR.put('/updateuser/:id', updateUser);
CR.get('/getuser/:id', getUserById);
CR.delete('/deleteuser/:id', deleteUser);




module.exports = CR;