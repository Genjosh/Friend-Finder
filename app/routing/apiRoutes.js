var friends = require("../data/friends.js");
// var waitListData = require("../data/waitinglistData");

module.exports = function(app) {


    app.get("/api/friends", function(req, res) {
        res.json(friendsList);
      });
    
    
    //   app.get("/api/waitlist", function(req, res) {
    //     res.json(waitListData);
    //   });
    
    //   // API POST Requests
    //   // Below code handles when a user submits a form and thus submits data to the server.
    //   // In each of the below cases, when a user submits form data (a JSON object)
    //   // ...the JSON is pushed to the appropriate JavaScript array
    //   // (ex. User fills out a reservation request... this data is then sent to the server...
    //   // Then the server saves the data to the tableData array)
    //   // ---------------------------------------------------------------------------
    
    //   app.post("/api/", function(req, res) {
    //     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    //     // It will do this by sending out the value "true" have a table
    //     // req.body is available since we're using the body-parser middleware
    //     if (tableData.length < 5) {
    //       tableData.push(req.body);
    //       res.json(true);
    //     }
    //     else {
    //       waitListData.push(req.body);
    //       res.json(false);
    //     }
    //   });
    
    //   // ---------------------------------------------------------------------------
    //   // I added this below code so you could clear out the table while working with the functionality.
    //   // Don"t worry about it!
    
    //   app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data
    //     tableData.length = [];
    //     waitListData.length = [];
    
    //     res.json({ ok: true });
    //   });
    };

    