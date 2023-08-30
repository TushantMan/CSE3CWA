// Exercice 2
let a = 439;
let b = 19;
let c = a + b;
console.log(c);

let d = Math.PI;
console.log(d * 10);

let var1 = 27;
console.log(var1);

let vae2 = "Twenty seven";
console.log(vae2);

const y = 29.5;
console.log(y);

// Exercice 3

const planet = ["Earth", "Mars", "Venus"];
console.log(planet);
planet.unshift("Mercury");
console.log(planet);
planet.push("Jupiter");
console.log(planet);
planet[2];
planet.length;
console.log(planet[2]);

// Exercice 4

const person = { name: "Daniel", age: 20 };
console.log(person);
person.name;
console.log(person.name);
person.job = "Developer";
console.log(person);

const paintColor = "blue";
const car = { paintColor };
console.log(car);

//document.getElementById("cool-section").innerHTML = "Hello World";
//document.body.setAttribute("style", "background-color: black;");
//document.getElementById("cool-section").setAttribute("style", "color: white;");

// Exercice 5

function doubleValue(x) {
  return x * 2;
}
doubleValue(7);

const areaOfSquare = function () {
  return this.side * this.side;
};
const square1 = { side: 7, area: areaOfSquare };
const square2 = { side: 4, area: areaOfSquare };

square1.area();
square2.area();

areaOfSquare();

const square3 = { size: 2 };

const areaOfSquare3 = areaOfSquare.bind(square3);

areaOfSquare3();

const arrowAreaOfSquare = () => {
  return this.side * this.side;
};
console.log(arrowAreaOfSquare());

const square4 = { side: 6, area: arrowAreaOfSquare };
square4.area();
console.log(square4.area());

const boundAreaOfSquare = function () {
  return this.side * this.side;
}.bind(this);
console.log(boundAreaOfSquare());

const addTogether = (a, b) => a + b;
console.log(addTogether(2, 3));

const addTogetherOld = function (a, b) {
  return a + b;
};

console.log(addTogetherOld(2, 3));

// Exercice 6

const higherScopeConst = 42;
const doSomething = (x) => x + higherScopeConst;
doSomething(8);
console.log(doSomething(8));

// Exercice 7

/*oldNumber = [1, 2, 3];
newNumber = [];
for (let i = 0; i < oldNumber.length; i++) {
  newNumber[i] = oldNumber[i] + 1;
}
console.log(newNumber);*/

oldNumber = [1, 2, 3];
newNumber = oldNumber.map((x) => x + 1);
console.log(newNumber);

// Exercice 8
names = ["Alice", "Bob", "Cthulhu"];
greetings = names.map((x) => "Hello " + x + "!");
console.log(greetings);

// Exercice 9
nyNumbers = [4, 7, 2];
sum = nyNumbers.reduce((sum, x) => sum + x, 0);
console.log(sum);

// Exercice 10
/* oldNumbers = [4, 7, 2];
newNumbers = _.reject(oldNumbers, (x) => x < 5);
console.log(newNumbers);

heroes = ["The Hulk", "Wonder Woman", "Batman"];
let hman = _.findIndex(heroes, (hero) => _.endsWith(hero, "man"));
let merica = _.findIndex(heroes, (hero) => _.endsWith(hero, "merica"));

console.log(hman);
console.log(merica);

old_record = { name: "Bob", age: 20 };
new_record = _.assign({}, old_record, { age: 21 });
console.log(new_record);

new_record = _.assign({}, old_record, { mood: "Curious" });
console.log(new_record);

new_record = _.assign({}, old_record, { age: 21, mood: "Curious" });
items = ["Orange", "Tomato", "Banana"];
new_items = _.assign([], items, { [1]: "Apple" }); */

// Exercice 11 Promises

/*console.log(fetch("https://httpbin.org/image/jpeg"));
fetch("https://httpbin.org/image/jpeg")
.then((res) => res.blob())
.then((blob) => {
    const img = "<img src='" + URL.createObjectURL(blob) + "'/>";
    document.body.insertAdjacentHTML("afterend", img);
})
.catch((err) => console.log(err));*/

// Exercice 12 createCircle which produces circle objects with two methods: area and perimeter

const circle = createCircle(4);

function createCircle(radius) {
  return {
    radius,
    area: () => Math.PI * radius * radius,
    perimeter: () => 2 * Math.PI * radius,
  };
}
console.log(circle);
console.log(circle.area());
console.log(circle.perimeter());

// Exercice 13 createCircles which takes an array of radii as input and returns an array of circles as output

const radii = [1, 2, 3, 4, 5];
const circles = createCircles(radii);

function createCircles(radii) {
  return radii.map((radius) => createCircle(radius));
}
console.log(circles);
console.log(circles[0].area());
console.log(circles[0].perimeter());

console.log(circles[3].area());
console.log(circles[3].perimeter());
