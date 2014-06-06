'use strict';

var http = require('http')
  , https = require('https')
  , url = require('url')
  , cloneextend = require('cloneextend')
  , request = require('request')
  , winston = require('winston')
  , FormData = require('form-data');

/**
 * Configure the connection with options.
 */
exports.init = function(apiBase, accessToken) {

  var parsedBaseUrl = url.parse(apiBase);
  var proto = parsedBaseUrl.protocol.indexOf('https')>-1 ? https : http;

  var baseOpts = {
    hostname: parsedBaseUrl.hostname,
    port: parsedBaseUrl.port,
    headers: { 'Content-Type': 'application/json' }
  };

  return {
    makeRequest: function(opts, body, callback) {
      opts.headers['Authorization'] = 'Bearer ' + accessToken;
      
      var req = proto.request(opts, function(res) {
        res.setEncoding('utf-8');
        var response = '';
        res.on('data', function(chunk) {
          response+=chunk;
        });

        res.on('end', function() {
          if(res.statusCode==200) {
            callback(null, JSON.parse(response));
          } else {
            winston.error('error accessing information from API');
            winston.error(res.statusCode);
            winston.error(response);
            var jsonresponse = null;
            try {
              jsonresponse = JSON.parse(response);
            } catch(err){
              jsonresponse = response;
            }
            callback('API request got status code: ' + res.statusCode + '.  ' + response, jsonresponse);
          }
        });
      });

      if(body) {
        req.write(body);
      }

      req.end();
    },

    get: function(path, callback) {
      var opts = cloneextend.clone(baseOpts);
      opts.path = path;
      opts.method = 'GET';

      this.makeRequest(opts, null, callback);
    },

    post: function(path, body, callback) {
      var opts = cloneextend.clone(baseOpts);
      opts.path = path;
      var bodyString;
      if(body){
        bodyString = JSON.stringify(body);
        opts.headers['Content-Length'] = Buffer.byteLength(bodyString, 'utf8');
      }else{
        delete opts.headers['Content-Type'];
      }
      opts.method = 'POST';

      this.makeRequest(opts, bodyString, callback);
    },

    postMultipart: function(path, parts, callback) {
      var url = apiBase + path + (path.indexOf('?') === -1 ? '?' : '&') + 'access_token=' + accessToken;
      
      var form = new FormData();
      for(var name in parts) {
        form.append(name, parts[name]);
      }
      
      form.getLength(function(err, length) {
        var r = request.post(url, callback);
        r._form = form;
        r.setHeader('content-length', length);
      });
    },

    put: function(path, body, callback) {
      var opts = cloneextend.clone(baseOpts);
      opts.path = path;
      var bodyString = JSON.stringify(body);
      opts.headers['Content-Length'] = Buffer.byteLength(bodyString, 'utf8');
      opts.method = 'PUT';

      this.makeRequest(opts, bodyString, callback);
    },

    delete: function(path, callback) {
      var opts = cloneextend.clone(baseOpts);
      delete opts.headers['Content-Type'];
      opts.path = path;
      opts.method = 'DELETE';

      this.makeRequest(opts, null, callback);
    }
  };
}
