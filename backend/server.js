// import express from 'express';
const express=require('express');

const mongoose=require('mongoose');
// import mongoose from 'mongoose';

// const Messages=require('./dbMessages.js');


//app config
const app=express();
const port=(process.env.PORT || 9000);


//middleware

//DB config
// const connection_url='mongodb+srv://admin:3ILn2uZfTKzQQLCb@cluster0.mchrl.mongodb.net/whatsappdb?retryWrites=true&w=majority';
// mongoose.connect(connection_url,{
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });

//api route
app.get("/",(req,res) => res.status(200).send('hello world'));

// app.post('/messages/new',(req,res) => {
//     const dbMessage=req.body;

//     dbMessages.create(dbMessage,(err,data) =>{
//         if(err) {
//             // internal server error
//             res.status(500).send(err);
//         } else {
//             // everything good
//             res.status(201).send(data);
//         }
//     });
// });


//listen
app.listen(port,() => console.log(`Listening on localhost :${port}`));
