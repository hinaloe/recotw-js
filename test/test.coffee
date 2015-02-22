global.Promise = require 'bluebird'
{ok} = require 'assert'

describe 'RecoTw', ->
  it 'should request by get request to recotw', (done) ->
    RecoTw = require '../src/index'
    RecoTw.setEndpoint 'http://api.recotw.black'
    RecoTw.Resources.Tweet.user_tweet sn:"java_shit"
    .then (data) ->
      ok data[0].target_sn is 'java_shit'
      done()

