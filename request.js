var request = require('request');
var fs = require('fs');

console.log('\nAttempting download...')

request.get('https://sytantris.github.io/http-examples/future.jpg', function(err, response, data){
         if(err){
           throw err;
         } else if(response.statusCode === 200) {
              console.log('\nDownload finished!')
         }
       })
        .on('response', function(response) {
          console.log('Response Status Code: ', response.statusCode);
          console.log('Response Message: ', response.statusMessage);
          console.log('Content Type: ',response.headers['content-type'], '\n');
          if (response.statusCode === 200) {
            response.on('data', function(data) {
            console.log("Downloading...")
            })
          }
        })
        /*.on('data', function(data) {
          console.log("Downloading...");
        })*/
        .pipe(fs.createWriteStream('./future.jpg'))