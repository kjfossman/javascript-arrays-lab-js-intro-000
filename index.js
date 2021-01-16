var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
let destructivelyAppendKitten = function(name){
  kittens.push(name)
}

let destructivelyPrependKitten = function(name){
  kittens.unshift(name)
}

destructivelyRemoveLastKitten = function(){
  kittens.pop()
}

destructivelyRemoveFirstKitten = function(){
  kittens.shift()
}
