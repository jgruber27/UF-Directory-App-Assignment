/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  Listing.find({code: 'LBW' }, function(err, listing){
    if (err) throw err;
    console.log(listing);
  });
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
};
var removeCable = function() {
  Listing.find({code: 'CABL' }, function(err, listing){
    if (err) throw err;
    listing.remove(function(err) {
      if (err) throw err;
      console.log('CABL deleted!');
    });
  });
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
};
var updatePhelpsLab = function() {
  Listing.find({code: 'PHL' }, function(err, listing){
    if (err) throw err;
    listing.address = '432 Newell Dr, Gainesville, FL 32611, United States';

    user.save(function(err){
      if (err) throw err;
      console.log('PHL address updated!');
    });
  });
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, listings) {
    if (err) throw err;
    console.log(listings);
  });
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
