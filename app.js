let input = prompt("Have a Guess! (Type 'q' to quit) ")
let correctAns = Math.floor(Math.random()*10)+1
let ct = 1;

while (input != correctAns) {

    if (input == "q") break;
    input = Number(input);

    if (input > correctAns){
        input = prompt("Have a Guess again! (LOWER)");
        ct++ ;
    }
    else if (input < correctAns){
        input = prompt("Have a Guess again! (HIGHER)");
        ct++ ;
    }
    else {
        input = prompt("Please Enter a Valid Guess... or type 'q' to quit ");
    }

}

if (input=="q") {
    console.log("YOU QUIT!!!")
}else {
console.log(`CORRECT!!! It took you ${ct} guesses.`)
console.log(correctAns)
}

