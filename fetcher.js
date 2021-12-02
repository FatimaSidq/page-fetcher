const url = process.argv[2], file = process.argv[3];

const request = require('request');
const fs = require('fs');

request(url, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    fs.writeFile(file, body, function (err) {
      if (err) {
        return console.log(err);
      }
    })
  } else {
    console.log(response, error);
  }
});