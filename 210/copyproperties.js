function copyProperties (object1, object2) {
  keyValuePairs = Object.entries(object1);
  for (var k in keyValuePairs) {
    object2[keyValuePairs[k][0]] = keyValuePairs[k][1];
  }
  return hal2;
}

var hal = {
  model: 9000,
  enabled: true,
};

hal2 = {}

console.log(copyProperties(hal, hal2));

