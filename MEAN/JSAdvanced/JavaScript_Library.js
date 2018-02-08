//Can we make this into a method of an object?
function each(arr, callback) {
    // loop through the array
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]); // invoking the callback many times... delegation!
    }
}

var _ = {
    map: function (list, iteratee) {
      let output = [];
      for (let x in list) {
          output.push(iteratee(list[x]));
      }
      return output;
    },

    reduce: function(list, iteratee, init) {
      var output = init;
      for (let x in list) {
        console.log(output);
        output = iteratee(output, list[x]);
      }
      return output;
    },

    find: function (list, iteratee) {
        for (let x in list){
          if(iteratee(list[x]) === true){
            return list[x];
          }
        }
    },
    filter: function (list, iteratee) {
      let output = [];
      for (let x in list) {
        if(iteratee(list[x]) === true){
          output.push(list[x]);
        }
      }
      return output;

    },
    reject: function (list, iteratee) {
        let output = [];
        for (let x in list){
          if(iteratee(list[x]) === false){
            output.push(list[x]);
          }
        }
        return output;
    }
}
// you just created a library with 5 methods!
var evens = _.filter([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].


























//