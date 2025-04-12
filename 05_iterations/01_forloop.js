// for

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is best number");
  }
  // console.log(element);
}

for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(`${i} * ${j} = ${i*j}`);
    
  }
}


let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break
    }
//    console.log(`Value of i is ${index}`);

}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


// ################# Triangle Pattern ###############



let string = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";

      }
      string += "\n";

    }
// console.log(string);

let string2 = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 6; j > i; j--) {
        string2 += "*";

      }
      string2 += "\n";

    }
// console.log(string2);
