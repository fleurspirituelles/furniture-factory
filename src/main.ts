import * as readlineSync from 'readline-sync';
import { clientChoice } from './client';
import { userMixedFurnitureTest } from './tests';

console.log("Welcome to the Furniture Store!");

let continueLoop = true;

while (continueLoop) {
  const option = readlineSync.question("Would you like to: (1) Choose a full set of furniture or (2) Mix and match different styles? (Enter 0 to exit): ");

  if (option === '1') {
    console.log("You can now choose your furniture style!");
    clientChoice();
  } else if (option === '2') {
    console.log("Let's create a mixed set and check the styles!");
    userMixedFurnitureTest();
  } else if (option === '0') {
    console.log("Thank you for visiting the Furniture Store!");
    continueLoop = false;
  } else {
    console.log("Invalid option! Please choose either 1, 2, or 0 to exit.");
  }

  if (continueLoop) {
    const anotherRound = readlineSync.question("Do you want to choose another set of furniture? (yes/no): ");
    if (anotherRound.toLowerCase() !== 'yes') {
      continueLoop = false;
      console.log("Thank you for visiting the Furniture Store!");
    }
  }
}