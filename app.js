const express = require("express");
require("dotenv").config();
const app = express();
var morgan = require('morgan')
const cookieParser = require('cookie-parser')
const fileupload= require('express-fileupload')

//for swagger documentaion
const sawggerUi = require('swagger-ui-express');
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");


//regular middle ware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//cookie parser and file uplaod 
app.use(cookieParser());
app.use(fileupload());

// app.use(morgan(':id : method :url :response-time'))
//morgan middleware
app.use(morgan('tiny'));


//import all routes here
const home = require("../tshirststore/routes/home")


//router middleware
app.use('/api/v1', home)


//export app js
module.exports = app;