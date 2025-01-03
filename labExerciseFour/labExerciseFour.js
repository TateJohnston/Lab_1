function add(init, mod) {
  return init + mod;
}
function subtract(init, mod) {
  return init - mod;
}
function divide(init, mod) {
  return init / mod;
}
function multiply(init, mod) {
  return init * mod;
}
function getName(name) {
  return "hello " + name;
}
function square(value) {
  return Math.pow(value, 2);
}
function sqRoot(value) {
  return Math.sqrt(value);
}
function average(x, y, z) {
  return (x + y + z) / 3;
}
function areaRectangle(length, width) {
  return length * width;
}
function changeToMiles(km) {
  let conversion = 0.621371;
  return km * conversion;
}

console.log(add(10, 10));
console.log(subtract(40, 20));
console.log(divide(160, 8));
console.log(multiply(5, 4));
console.log(getName("tate"));
console.log(sqRoot(400));
console.log(square(8));
console.log(average(34, 10, 16));
console.log(areaRectangle(5, 4));
console.log(changeToMiles(16));
