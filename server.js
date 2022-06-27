const express=require('express');
const server=express();
server.use(express.json());
const main= require('./credit');
server.use(main);

server.listen(3300,()=>{

    console.log("server is running");

})