// const prompt = require("prompt-sync")();
let no = Math.floor(Math.random() * 100) + 1;
console.log(no);
let chance = 0;
let guess = 0;

do {
    guess = prompt("Guess the number between 1 and 100: ");
    guess = parseInt(guess);
    if (no === guess) {
        alert(`\n✅You guessed it right ${no}`);
    } else if (no > guess) {
        alert(
            `\n❌you guessed it wrong, the number is greater than ${guess} \n`
        );
    } else if (no < guess && guess < 100) {
        alert(
            `\n❌you guessed it wrong, the number is less than ${guess} \n`
        );
    } else {
        alert("\n🔴please enter no between 1 and 100");
    }
    chance++;
} while (no !== guess);

alert(`\n🎉you guessed it right in ${chance} chances🎉`);
alert(`\n\tyour score is ${(score = 100 - chance)} 🥳`);