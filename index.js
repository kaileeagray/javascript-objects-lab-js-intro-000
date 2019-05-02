var recipes = {
  peanutButterJelly : ["bread", "pb", "jelly"]
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}
