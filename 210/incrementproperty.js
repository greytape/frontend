function objectHasProperty(object, string) {
  return Object.keys(object).includes(string);
}

function incrementProperty (object, string) {
  if (objectHasProperty(object,string)) {
    object[string] = object[string] + 1;
  } else {
    object[string] = 1;
  }
}

var wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);    