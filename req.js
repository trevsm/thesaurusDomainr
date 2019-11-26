const request = require("request");
const fs = require("fs");

module.exports = {
  get
};

function get(url) {
  return new Promise(function(resolve, reject) {
    var options = {
      method: get,
      url
    };
    request.get(options, (error, response, body) => {
      if (error) {
        return reject(error);
      }
      resolve({
        response,
        body
      });
    });
  });
}
