var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
let destructivelyAppendKitten = function(name){
  kittens.push(name)
}

let destructivelyPrependKitten = function(name){
  kittens.unshift(name)
}

let destructivelyRemoveLastKitten = function(){
  kittens.pop()
}

let destructivelyRemoveFirstKitten = function(){
  kittens.shift()
}

let appendKitten  = function(name){
  return [...kittens, name]
}

let prependKitten = function(name){
  return [name, ...kittens]
}
