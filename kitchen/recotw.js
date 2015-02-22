var RecoTw;
(function (RecoTw) {
    var request;
    function setRequester(f) {
        request = f;
    }
    RecoTw.setRequester = setRequester;
    var Resources;
    (function (Resources) {
        var Tweet = (function () {
            function Tweet() {
            }
            Tweet.get_tweet_all = function (params) {
                return request('GET', '/1/tweet/get_tweet_all', params);
            };
            Tweet.user_tweet = function (params) {
                return request('GET', '/1/tweet/user_tweet', params);
            };
            Tweet.count_tweet = function (params) {
                return request('GET', '/1/tweet/count_tweet', params);
            };
            Tweet.record_tweet = function (params) {
                return request('POST', '/1/tweet/record_tweet', params);
            };
            return Tweet;
        })();
        Resources.Tweet = Tweet;
        var Count = (function () {
            function Count() {
            }
            return Count;
        })();
        Resources.Count = Count;
    })(Resources = RecoTw.Resources || (RecoTw.Resources = {}));
})(RecoTw || (RecoTw = {}));
module.exports =RecoTw;