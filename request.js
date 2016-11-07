var request = require('request');
var fs = require('fs');

console.log('\nAttempting download...')
request.get('https://sytantris.github.io/http-examples/future.jpg', function(err, response){
         if(err){
           throw err;
         } else if(response.statusCode === 200) {
              console.log('\nDownload finished!')
         }
       })
        .on('data', function(data) {
          console.log("Downloading...");
        })
        .on('response', function(response) {
         console.log('\nResponse Status Code: ', response.statusCode, '\nResponse Message: ', response.statusMessage, '\nContent Type: ',response.headers['content-type'], '\n');

        })
        .pipe(fs.createWriteStream('./future.jpg'))
