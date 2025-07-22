// const prompt = require("prompt-sync")();
let no = Math.floor(Math.random() * 100) + 1;
let chance = 0;
let guess = 0;

do {
    guess = prompt("Guess The Number Between 1 and 100: ");
    guess = parseInt(guess);
    if (no === guess) {
        alert(`\n✅You Guessed it Right ${no}`);
    } else if (no > guess) {
        alert(
            `\n❌You Guessed it Wrong, the Number is Greater Than >${guess} \n`
        );
    } else if (no < guess && guess < 100) {
        alert(
            `\n❌You Guessed it Wrong, the Number is Less Than <${guess} \n`
        );
    } else {
        alert("\n🔴Please Enter Number Between 1 and 100");
    }
    chance++;
} while (no !== guess);

alert(`\n🎉You Guessed it Right in ${chance} Chances🎉`);
alert(`\n\tYour Score is ${(score = 100 - chance)} 🥳`);