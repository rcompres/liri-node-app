//the variable to pull the key from
var twitterKey = require(keys.js);

var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: keyData.twitterKeys.consumer_key,
	consumer_secret: keyData.twtterKeys.consumer_secret,
	access_token_key: keyData.twitterKeys.access_token_key,
	access_token_secret:keyData.twitterKeys.access_token_secret
});
//Detecting the input
var userCommandOne = process.argv[2];
var userCommandTwo = process.argv[3];

function twitterTweets() {
if (userCommandOne == "my-tweets") {
	var params = {
		screen_name:'r_compres',
		count: 20,
		trim_user: true

	};

	client.get('statuses/user_timeline',params,function(error, tweets, response){
		if (!error) {
			for (var i=0; i<20; i++) {
				console.log("Tweet posted at: "+ tweets[i].created_at + "\n"+ "Tweet Number: " + (i + 1) "\n" +tweets[i].text + "\n");
			}
		} else{
			console.log("Error! Cannot Compute! must destroy all Humans ");
		}
	});
} else {
	console.log("Not a known command, try again!");
}
};

twitterTweets();