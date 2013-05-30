var http = require('http')
  , https = require('https')
  , url = require('url')
  , cloneextend = require('cloneextend');
  
var parsedBaseUrl = url.parse(process.env.FOODLOGIQ_SITE);
var proto = parsedBaseUrl.protocol.indexOf('https')>-1 ? https : http;


var baseOpts = {
  hostname: parsedBaseUrl.hostname,
  port: parsedBaseUrl.port,
  headers: { 'Content-Type': 'application/json' }
};

/** 
 * Configure the connection with options.
 */
exports.init = function(accessToken) {
  console.log('initializing foodlogiq connection with accessToken: '+accessToken);
  
  return { 
    makeRequest: function(opts, body, callback) {
      opts.path += '?access_token='+accessToken;
      console.dir(opts);
      
      var req = proto.request(opts, function(res) {
        res.setEncoding('utf-8');        
        var response = '';
        
        if(res.statusCode==200) {
          res.on('data', function(chunk) {
            response+=chunk;
          });
          res.on('end', function() {
            callback(null, JSON.parse(response));
          });
        } else { 
          callback('API request got status code: ' + res.statusCode);
        }
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
      var bodyString = JSON.stringify(body);
      opts.headers['Content-Length'] = bodyString.length;
      opts.method = 'POST';
      
      this.makeRequest(opts, bodyString, callback);
    },
    
    delete: function(path, callback) {
      var opts = cloneextend.clone(baseOpts);
      opts.path = path;
      opts.method = 'DELETE';
      
      this.makeRequest(opts, null, callback);
    }
  };
}
