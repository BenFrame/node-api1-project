// BUILD YOUR SERVER HERE
const express = require('express') ; 
const server = express() ; 

server.get('/api/users', (req, res) =>{
    console.log('getting all users')
    res.status(200).json({
        message: "working?"
    })
})

server.use('*', (req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
