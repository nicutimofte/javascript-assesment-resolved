exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var leng = str.length;
    var newStr = new Array;
    var count = 0;

    for (i = 0; i < leng; i++) {
      while (str[i] === str[i + 1] ) {
        count++;
        i++;
      }
      if (count >= 1) {
        for (j = 0; j < amount; j++)
          newStr += str[i];

      }else newStr+=str[i];
    }
    return newStr;
  },

  wordWrap: function(str, cols) {
    var formatedString = '',
        wordsArray = [];


    wordsArray = str.split(' ');

    formatedString = wordsArray[0];

    for (var i = 1; i < wordsArray.length; i++) {
      if (wordsArray[i].length > cols) {
        formatedString += '\n' + wordsArray[i];
      } else {
        if (formatedString.length + wordsArray[i].length > cols) {
          formatedString += '\n' + wordsArray[i];
        } else {
          formatedString += ' ' + wordsArray[i];
        }
      }
    }

    return formatedString;
  
  },

  reverseString: function(str) {
    var newString = new Array;
    var res = new Array;
    for(var i = 0; i< str.length; i++) {
      newString[i] = str[str.length - 1 - i];
    }
    for (var i = 0; i< str.length; i++){
      res += newString[i];
    }
    return res;
  }
};