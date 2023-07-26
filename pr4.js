function factorecursive(number) {
  function facto(num) {
    if (num <= 1) {
      return 1;
    } else {
      return num * facto(num - 1);
    }
  }

  return facto(number);
}

let global = "global variable";

function func() {
  let local = "local variable";

  console.log("Accessing global variable:", global);
  console.log("Accessing local variable:", local);
}

const number = 7;
console.log(`Factorial of ${number} is:`, factorecursive(number));

func();
