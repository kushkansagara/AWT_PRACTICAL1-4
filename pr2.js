let array = [19, "kush", "Male", 5.5, true];

console.log("Length of the array:", array.length);
console.log("Element at index 2:", array[2]);
array.push(60);
console.log("Array after push:", array);

array.pop();
console.log("Array after pop:", array);

array.shift();
console.log("Array after shift:", array);

array.unshift(0);
console.log("Array after unshift:", array);

console.log("Array joined as string:", array.join(", "));

delete array[2];
console.log("Array after delete:", array);

let anotherArray = [7, 8, 9];
let concatenated_Array = array.concat(anotherArray);
console.log("Concatenated array:", concatenated_Array);

let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattened_Array = nestedArray.flat(2);
console.log("Flattened array:", flattened_Array);

array.splice(1, 2, 10, 11);
console.log("Array after splice:", array);

let sliced_Array = array.slice(1, 4);
console.log("Sliced array:", sliced_Array);

let person = {
  name: "kush Kansagara",
  age: 20,
  gender: "Male",
};

function displayPersonDetails(p_Obj) {
  console.log("Name:", p_Obj.name);
  console.log("Age:", p_Obj.age);
  console.log("Gender:", p_Obj.gender);
}

displayPersonDetails(person);
