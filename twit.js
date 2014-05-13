var Twit = require('twit');
var colors = require('colors');

console.log('connecting to twitter stream...'.magenta.bold);
console.log('--------------------------------------------------------------------------------'.yellow);

var T = new Twit({
    consumer_key:         '**********'
  , consumer_secret:      '**********'
  , access_token:         '**********'
  , access_token_secret:  '**********'
});

/* For more information, and adding users to the stream on top of tags follow the API
 * https://dev.twitter.com/docs/streaming-apis/parameters
 * track is for search API (hashtags, raw search, full text, etc)
 * follow is for @users (tweets created, retweets, replies) [note: will NOT contain mentions]
 */
var stream = T.stream('statuses/filter', { track: 'bitcoin,dogecoin,litecoin', stall_warnings: true });
var counter = 0;

if (stream) {
	console.log('connected!'.magenta.bold);
};

console.log('--------------------------------------------------------------------------------'.yellow);

stream.on('tweet', function (tweet) {
	console.log('tweet: '.magenta.bold + tweet.text);
	console.log('by:'.green + ' @' + tweet.user.screen_name);
	console.log('date:'.cyan + ' ' + tweet.created_at + ' | ' + counter);
	console.log('--------------------------------------------------------------------------------'.yellow);
	counter++;
});
