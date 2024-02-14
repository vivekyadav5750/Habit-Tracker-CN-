// import express from 'express'
// import dotenv from 'dotenv'
const express = require('express');
const dotenv = require('dotenv');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const moment = require('moment'); 
const sassMiddleware = require('node-sass-middleware');

const mongoose = require('mongoose');
const db= require('./config/mongoose');


const router = require('./routers/index.js');
dotenv.config();
const app = express();

moment().format(); 

// ------SCSS ------//
app.use(sassMiddleware({
  src: path.join(__dirname, './assets/sass'),
  dest: path.join(__dirname, './assets/css'),
  debug: false,
  outputStyle: 'compressed',
  prefix:  '/css' 
}));

// ------Statics files ------ //
app.use(express.static(path.join(__dirname,'./assets')))
app.use(express.urlencoded());


// ----------EJS-----------//
app.set('view engine','ejs');
app.set('views',path.join(path.resolve(), 'views'));
app.use(expressLayout);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/', router);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})

