var http = require('http')
  , https = require('https')
  , url = require('url')
  , cloneextend = require('cloneextend')
  , request = require('request');
  
var apiBase;

exports.setApiBase = function(ab) { apiBase = ab; }
  
/**
 * Configure the connection with options.
 */
exports.init = function(accessToken) {

  var parsedBaseUrl = url.parse(apiBase);
  var proto = parsedBaseUrl.protocol.indexOf('https')>-1 ? https : http;

  var baseOpts = {
    hostname: parsedBaseUrl.hostname,
    port: parsedBaseUrl.port,
    headers: { 'Content-Type': 'application/json' }
  };

  return {
    makeRequest: function(opts, body, callback) {
      if(opts.path.indexOf('?') != -1){
        opts.path += '&access_token='+accessToken;
      }else{
        opts.path += '?access_token='+accessToken;
      }
      console.dir(opts);

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
            console.error('error accessing information from API');
            console.dir(res.statusCode);
            console.dir(response);
            callback('API request got status code: ' + res.statusCode + '.  ' + response, JSON.parse(response));
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
      var form =
        request
          .post(
            apiBase +
              path +
              (path.indexOf('?') === -1 ? '?' : '&') +
              'access_token=' +
              accessToken,
            callback
          )
          .form();
      for (var name in parts) form.append(name, parts[name]);
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
