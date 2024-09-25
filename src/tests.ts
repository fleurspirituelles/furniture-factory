import * as readlineSync from 'readline-sync';
import { getFurnitureFactory } from './client';

export function userMixedFurnitureTest(): void {
  const styles = ['ArtDeco', 'Victorian', 'Modern'];

  console.log("Pick furniture from different styles to create a mixed set:");

  const chosenChairStyle = readlineSync.question(`Choose a style for the chair: ${styles.join(', ')}: `);
  const chosenSofaStyle = readlineSync.question(`Choose a style for the sofa: ${styles.join(', ')}: `);
  const chosenCoffeeTableStyle = readlineSync.question(`Choose a style for the coffee table: ${styles.join(', ')}: `);

  const chairFactory = getFurnitureFactory(chosenChairStyle);
  const sofaFactory = getFurnitureFactory(chosenSofaStyle);
  const coffeeTableFactory = getFurnitureFactory(chosenCoffeeTableStyle);

  if (chairFactory && sofaFactory && coffeeTableFactory) {
    const chair = chairFactory.createChair();
    const sofa = sofaFactory.createSofa();
    const coffeeTable = coffeeTableFactory.createCoffeeTable();

    const styleCheck = (chair.style === sofa.style && chair.style === coffeeTable.style);

    if (styleCheck) {
      console.log("All furniture match in style!");
    } else {
      console.log("Warning: The furniture styles do not match! The client assumes the risk.");
    }

    console.log(chair.display());
    console.log(sofa.display());
    console.log(coffeeTable.display());
  } else {
    console.log("Invalid style chosen! Please try again.");
  }
}