var recipes = { };

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign ({}, object, { [key]: value } );
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  return Object.assign (object, { [key]: value });
}

function deleteFromObjectByKey (object, key) {
  var obj = { object: key };
  var newObj = Object.assign ({}, obj);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = { object:key };
  delete obj[key];
return Object.assign (object, obj);
}
