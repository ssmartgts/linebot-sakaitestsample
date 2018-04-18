'use strict';

const Twitter = require('twitter');
const tw = new Twitter({
  consumer_key: 'J6Z5M3vgS8T51H4uAd5VIJ9gD', // Consumer Key
  consumer_secret: 'WFwjTib9qK7qqkZQwKudmB4WYnCsgdj71fTeIAZBbS2VY5ykYM', // Consumer Secret
  access_token_key: '155897711-G3HbG6Wg5iSrAS0nsugL4W1xizC36GARyJVS0ULn', // Access Token
  access_token_secret: 'eREfgKoQUgISH8USBP40K8Ofqb6VUVw9rjbaucjc6ovkT' // Access Token Secret
});
const TARGET_HASHTAG = '#TrainDelay';
//const TARGET_HASHTAG = '#NHK';

tw.stream('statuses/filter', {'track': TARGET_HASHTAG}, (stream) => {
  stream.on('data', (data) => {
    if (data.text.indexOf("ëçïê") !== -1) {
      console.log(data.text);
    }
  });
});