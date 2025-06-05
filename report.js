const newman = require('newman');
// require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/45441927-296ad758-8748-449c-a922-869fbec92866?access_key=${process.env.pmatkey}`,

    //collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
    
});