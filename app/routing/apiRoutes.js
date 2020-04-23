
// get the friend array from file
var friendsArray = require("../data/friends.js");

//calculate closest match by least difference of each score
findMatch = function(userScore) {
    let index = 0;
    let lowestDiff = 0;
    for (var i = 0; i < friendsArray.length; i++) {
        let totalDiff = 0;
        for (var j = 0; j < userScore.length; j++) {
            let scoreDiff = Math.abs(userScore[j] - friendsArray[i].scores[j]);
            totalDiff += scoreDiff;
        }
        if (i == 0) {
            lowestDiff = totalDiff;
        }
        else if ( i != 0 && totalDiff < lowestDiff ) {
            lowestDiff = totalDiff;
            index = i;
        }
    }
    return index;
}

// define friends endpoint get/post callback functions for export
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendsArray);
    });
    
    app.post('/api/friends', function(req, res) {
        var userData = req.body;
        var index = findMatch(userData.scores);
        friendsArray.push(req.body);
        res.json(friendsArray[index]);
    });
}