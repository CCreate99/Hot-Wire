const Gpio = require('onoff');
const LED = new Gpio(4, 'out');
const blinkInterval = setInterval(blinkLED, 250);

function blinkLED() {
  if(LED.readSync() === 0) {
    LED.writeSync(1);
  } else {
    LED.writeSync(0);
  }
}

function endBlink() {
  cleaerInterval(blinkInterval);
  LED.writeSync(0);
  LED.unexport();
}

setTimeout(endBlink, 5000);