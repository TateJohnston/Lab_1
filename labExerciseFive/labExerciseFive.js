const dogs = ["dolly", "barzy", "franky", "omlet", "pugsley"];

dogs[0] = "leo";
dogs[3] = "iggy";
dogs.unshift("frank");
dogs.pop();

console.log(dogs);

const colours = ["pink", "yellow", "blue", "brown", "red"];
colours.push("cyan");

function twoColours(x, y) {
  return [x, y];
}
result = twoColours(colours[0], colours[3]);

console.log(colours);
console.log(colours.length);
console.log(result);
