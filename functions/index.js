const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const express = require('express');
const path = require('path');
const app = express();



// app.set('port',  4000);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

app.get('/',(req,res)=>{
    res.send("Hola Mundo");
});

app.get('/otra',(req,res)=>{
    res.send("Otra ruta");
});

app.set('views',path.join(__dirname, './src/views'));

app.use(express.static(path.join(__dirname,'public')));

exports.app=functions.https.onRequest(app);