//functions part 1

function forEach(array, callback){
  for (var i = 0; i < array.length; i++){
    callback(array[i], i, array);
  }
}
console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24);

function reduce(array, callback){
  var accumulator;
  forEach(array, function(value, i, callbackArray) {
    if(i === 0) {
      accumulator = value;
    } 
    else if (i < array.length) {
      accumulator = callback(accumulator, value);
    }
  });
  return accumulator;
}

console.assert(
    reduce([1, 2, 3, 4], function(a, v){ return a*v }) === 24
)

function map(array, callback){
    var newArray = [];
    
    forEach (array, function (array, i) {
             newArray[i]= callback(array);
      console.log(callback(array));
    });
    return newArray;  
};


var squares = map([1, 2, 3, 4], function(v){ return v*v })
console.assert(squares[0] === 1)
console.assert(squares[1] === 4)
console.assert(squares[2] === 9)
console.assert(squares[3] === 16)

function filter(array, callback){
    var filterArray = [];
    reduce (array, function (v, i){
    var index = callback(i);
        if (index) {
            filterArray.push(i);
        }
    });
        return filterArray;
    
}


var evens = filter([1, 2, 3, 4], function(v){ return v%2 === 0 })
console.assert(evens[0] === 2)
console.assert(evens[1] === 4)

function sum(){
    var args = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
    var total = args.reduce(function(a,b){
        return a + b;
    });
    return total;
}         
    

// tests
// ---
console.log(sum(1, 2, 3))
console.assert(sum(1, 2, 3) === 6)
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(1, 2, 3, 4, 5) === 15)


var names = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"}
]

names.sort(function(a, b){
    if (a.name < b.name){
        return -1;
    } else if (a.name > b.name){
        return 1;
    }
    return 0;
});

console.log(names[0].name)
console.assert(names[0].name === "Brian")
console.assert(names[1].name === "Jesse")
console.assert(names[2].name === "Matt")
