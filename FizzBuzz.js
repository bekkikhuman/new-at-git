var str = "";

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) str += ("FizzBuzz ");
    else if (i % 3 === 0) str += ("Fizz ");
    else if (i % 5 === 0) str += ("Buzz ");
    else str += i + " ";
}
console.log(str);