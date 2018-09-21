function hello(name) {
  console.log("Hello " + name + "!");
}

function greetEveryone(namesArray) {
  for (i = 0; i < namesArray.length; i += 1) {
    hello(namesArray[i]);
  }
  hi()
} 

names = ['Dave', 'Sally', 'Geoff', "Carl"]

greetEveryone(names);