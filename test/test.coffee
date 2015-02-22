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

  it 'should request by get and post request to recotw', (done) ->
    RecoTw = require '../src/index'
    RecoTw.setEndpoint 'http://api.recotw.black'
    RecoTw.Resources.Tweet.user_tweet sn:"java_shit"
    .then (data) ->
      if data[0].target_sn is 'java_shit'
        RecoTw.Resources.Tweet.record_tweet id: data[0].tweet_id
        .then (data) ->
          ok !data.result
          done()
        .catch (err) ->
          try
            ok JSON.parse(err.error.text).errors[0].message is 'Already recorded'
          catch e
            console.error "Error: #{e} Res:#{err.error.text}"

          done()




