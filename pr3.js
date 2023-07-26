let a = 100;
a = 200;
console.log(a);

const B = 3.14;

const add = (i, j) => i + j;
console.log(add(50, 60));

const array_1 = [10, 20, 30, 40, 50, 60];
const array_2 = [...array_1, 70, 80];
console.log(array_2);

const sport = ["cricket", "kabaddi", "football"];
for (const each of sport) {
  console.log(each);
}

const mp = new Map();
mp.set("key1", "kush");
mp.set("key2", "kansagara");
console.log(mp.get("key1"));

const set1 = new Set([10, 20, 30, 40, 50, 60, 70, 80]);
console.log(set1);

class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`my name is ${this.name} & I am ${this.age} year old`);
  }
}

const user = new People("Kush", 18);
user.greet();

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data get");
    }, 5000);
  });
};

fetchData().then((data) => {
  console.log(data);
});

const symbol1 = Symbol("extra");
const symbol2 = Symbol("extra");
console.log(symbol1 === symbol2);

const greet = (name = "Extra") => {
  console.log(`Hello, ${name}!`);
};

greet();
greet("kush");

const sum = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sum(10, 20, 30, 40, 50));
