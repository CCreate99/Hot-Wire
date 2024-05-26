const express = require('express');
const config = require('dotenv').config();
const path = require('path');
let gpio = require('onoff').Gpio;
let LED = new gpio(4, 'out');
let pushButton = new gpio(17, 'in', ' both');
let counter = 0;


const app = express();

// const port = process.env.PORT || 5000;
 

// default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});


// API route that will return the value of counter
app.get('/counter', (req, res) => {
  res.status(200).send({ value: counter });
});


// app will listen to every request to port 5000 
app.listen(port, (req, res) => {
  console.log(`Server is runnning on Port ${port}`);
});


pushButton.watch(function (err, value){
  if( value == 1 ) {
    console.log(`Come on man. You already Hit the Wire ${value + 1} times`);
    return counter += counter;
  } else if( err ) {
    console.log(`Look's like some magic in the backend just broke. Anyways you hit the Wire ${value}`)
    console.error(err);
    return err;
  };
  LED.writeSync(value);
});

function unexportOnClose() {
  LED.writeSync(0);
  LED.unexport();
  pushButton.unexport();
};

process.on('SIGINT', unexportOnClose);