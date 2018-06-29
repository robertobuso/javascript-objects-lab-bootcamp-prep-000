var recipes = { key: "value" };

function updateObjectWithKeyAndValue (key, value) {
  return Object.assign ({}, recipes, { [key]: "value" });
}

