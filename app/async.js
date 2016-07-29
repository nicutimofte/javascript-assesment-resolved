exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function (value) {
    var promise = new Promise(function (resolve, reject) {
      if (value !== false)
        resolve(value);
      else
        reject(Error(false));
    });
    return promise;
  },

  manipulateRemoteData: function (url) {
    var promise = new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      var people = '';
      request.open('GET', url, true);
      request.onload = function () {
        if (request.status == 200) {
          people = request.responseText;
          people = JSON.parse(people);

          var namesArray = people.people.map(function (nameObj) {
            return nameObj.name;
          });
          namesArray.sort();
          resolve(namesArray);
        }
        else {
          reject(Error('error'));
        }
      };
      request.send();
    });
    return promise;
  }
};
``