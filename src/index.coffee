request = require 'superagent'
RecoTw = require '../kitchen/recotw'

RecoTw.setEndpoint = (endpoint) -> RecoTw._endpoint = endpoint
RecoTw.setRequester (method, api, params) ->
  if !Promise?
    return new Promise.reject 'You should require promise or its shim'

  new Promise (done, reject) ->
    url = RecoTw._endpoint+api
    req =
      if method is 'GET'
        request.get url
#        .type "form"
        .query params
      else
        request[method.toLowerCase()] url
        .type 'form'
        .send params
    req
    .set 'Accept', 'application/json'
    .end (error, res) ->
      if error then return reject(error)
      if parseInt(res.statusCode, 10) >= 400
        return reject error: res.error, status:res.statusCode
      done(res.body)

module.exports = RecoTw