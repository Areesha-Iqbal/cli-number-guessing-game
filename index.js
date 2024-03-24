#! /usr/bin/env node
import inquirer from "inquirer";
//Computer will generate a random number
//User input for guessing number
//Compare user input with computer generated number and show result
console.log("\n\tWelcome to Areesha_Iqbal - CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a Number between 1 to 6: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right Number.");
}
else {
    console.log("Sorry, You guessed wrong Number");
}
