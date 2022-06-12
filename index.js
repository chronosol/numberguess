var username = prompt("Enter your name: ");

function genRand(min = 1, max) {
    max = 2
    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;
    var pick = parseInt(prompt(`Pick a number between 1 and ${max} `))
    if (rand === pick) {
      max += 1;
      console.log("correct");
      genRand();
    } else { 
      console.log("try again")
      genRand();
    }
    return rand;
}
console.log(genRand());
