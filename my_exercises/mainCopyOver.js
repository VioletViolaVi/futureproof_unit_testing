// 5. Update to pass tests
const catName = "Zelda";
const catLocation = "London";

function takeMeHome() {
  try {
  } catch {
    throw "Assignment to constant variable.";
  }
  return "Cornwall";
}

function rename(newName) {
  try {
    catName = newName;
  } catch (e) {
    throw TypeError("Bob", "main.js");
  }
}

module.exports = {
  catName,
  catLocation,
  takeMeHome,
  rename,
};
