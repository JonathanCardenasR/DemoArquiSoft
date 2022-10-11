const express = require('express');
const app = express();
const vision = require('@google-cloud/vision');
const PORT = 8000;

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'APIkey.json'
});

// Performs label detection on the image file
client
  .labelDetection('./ciudad.jpg')
  .then(results => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
    //console.log(results);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

app.listen(PORT, () => console.log(`SE INICIÓ EL SERVER ${PORT}`));
