exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    var binNum = num.toString(2);
    var revNum = new Array;
    for (var i = 0; i < binNum.length; i++) {
      revNum[binNum.length - i] = binNum[i];
    }
    for (var i = 0; i < revNum.length; i++) {
      if (i === bit) {
        var nr = revNum[i] * 1;
        return nr;
      }
    }
    return revNum;
  },

  base10: function(str) {
    return str.split('').reverse().reduce(function(x, y, i){
      return (y === '1') ? x + Math.pow(2, i) : x;
    }, 0);
  },

  convertToBinary: function(num) {
   
    var n= num.toString(2);
    n="00000000".substr(n.length)+n;
    return n;
  },

  multiply: function(a, b) {
    var commonMultiplier = 1000000;

    a *= commonMultiplier;
    b *= commonMultiplier;

    return (a * b) / (commonMultiplier * commonMultiplier);
  }
};
