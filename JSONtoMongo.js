'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

mongoose.connect(config.db.uri);

fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err) throw err;
  var listingData = JSON.parse(data);
  for(var i in listingData.entries){
    var newListing = listingData.entries[i];
    if(newListing.coordinates && newListing.address){
      new Listing({
        name: newListing.name,
        code: newListing.code,
        address: newListing.address,
        coordinates: {
          latitude: newListing.coordinates.latitude,
          longitude: newListing.coordinates.longitude
        }
      }).save(function(err, listing){
        if (err) throw err;
        console.log('Listing created!');
      });
    }
    else if(newListing.address){
      new Listing({
        name: newListing.name,
        code: newListing.code,
        address: newListing.address,
      }).save(function(err, listing){
        if (err) throw err;
        console.log('Listing created!');
      });
    }
    else if(newListing.coordinates){
      new Listing({
        name: newListing.name,
        code: newListing.code,
        coordinates: {
          latitude: newListing.coordinates.latitude,
          longitude: newListing.coordinates.longitude
        }
      }).save(function(err, listing){
        if (err) throw err;
        console.log('Listing created!');
      });
    }
    else{
      new Listing({
        name: newListing.name,
        code: newListing.code,
      }).save(function(err, listing){
        if (err) throw err;
        console.log('Listing created!');
      });
    }
  }
});


/* Connect to your database */

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */