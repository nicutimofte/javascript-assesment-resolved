exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      for(var i=0;i<arr.length;i++){
        if (arr[i]===item)
            return i;
      }
    return -1;
  },

  sum: function(arr) {
    var sum=0;
    for(var i=0;i<arr.length;i++){
      sum+=arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    var newArr = arr;
    for(var i = newArr.length; i--;){
      if (newArr[i] === item)
        newArr.splice(i, 1);
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    var newArr = arr;
    for(var i = newArr.length; i--;){
      if (newArr[i] === item)
        newArr.splice(i, 1);
    }
    return newArr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(-1,1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    var len1= arr1.length;
    var len2 = arr2.length;
    for(var i = 0; i<len2; i++){
      arr1[len1+i]=arr2[i];
    }
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count: function(arr, item) {
    var count=0;
    for(var i=0;i<arr.length;i++){
      if(arr[i]===item)
          count=count+1;
    }
    return count;
  },

  duplicates: function(arr) {
    var arr2=[];
    for(var i=0;i<arr.length-1;i++){
      var ok=0;
      for(var j=i+1;j<arr.length;j++)
        if(arr[i]===arr[j] && ok===0){
          ok2=0;
          for(k=0;k<arr2.length;k++){
            if(arr[i]===arr2[k])
                ok2=1
          }
          if(ok2===0)
            arr2.push(arr[i]);
          ok=1;
        }
    }
    return arr2;
  },

  square: function(arr) {
    for(var i=0;i<arr.length;i++){
      arr[i]=arr[i]*arr[i];
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var arr2=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i]===target)
          arr2.push(i);
    }
    return arr2;
  }
};
