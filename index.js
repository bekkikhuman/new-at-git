var str = "";
for (var i = 1; i <= 5; i++) {
  switch (true) {
    case i % 3 === 0 && i % 5 === 0: str += ("FizzBuzz ");
      break;
    case i % 3 === 0: str += ("Fizz ");
      break;
    case i % 5 === 0:
      str = str + ("Buzz ");
      break;
    
    default: str += i + " ";
  }
}
    console.log(str);


    var str="";
    for (let i = 0; i <= 10; i++) {
            if (i % 5 === 0 && i % 3 === 0) str+= ("FizzBuzz ");
            else if (i % 3 === 0) str+= ("Fizz ");
            else if (i % 5 === 0) str+= ("Buzz ");
            else
            str+= i + " ";
        }
            console.log(str);

