import * as readlineSync from 'readline-sync';
import { ArtDecoFurnitureFactory } from './factories/ArtDeco/ArtDecoFurnitureFactory';
import { VictorianFurnitureFactory } from './factories/Victorian/VictorianFurnitureFactory';
import { ModernFurnitureFactory } from './factories/Modern/ModernFurnitureFactory';
import { FurnitureFactory } from './factories/FurnitureFactory';

export function getFurnitureFactory(style: string): FurnitureFactory | null {
  switch (style.toLowerCase()) {
    case 'artdeco':
      return new ArtDecoFurnitureFactory();
    case 'victorian':
      return new VictorianFurnitureFactory();
    case 'modern':
      return new ModernFurnitureFactory();
    default:
      return null;
  }
}

export function clientChoice(): void {
  const styles = ['ArtDeco', 'Victorian', 'Modern'];

  console.log("Choose your furniture style:");
  const chosenStyle = readlineSync.question(`Options: ${styles.join(', ')}: `);

  const factory = getFurnitureFactory(chosenStyle);

  if (factory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const coffeeTable = factory.createCoffeeTable();
    const style = factory.getStyle();

    if (chair.style === style && sofa.style === style && coffeeTable.style === style) {
      console.log(`All furniture belong to the ${style} style. They match perfectly!`);
    } else {
      console.log("Warning: The furniture styles do not match!");
    }

    console.log(chair.display());
    console.log(`This chair has an area of ${chair.calculateArea()} cm².`);
    console.log(sofa.display());
    console.log(`The sofa volume is ${sofa.calculateVolume()} cm³.`);
    console.log(coffeeTable.display());
    console.log(`This coffee table has the surface area of ${coffeeTable.calculateSurfaceArea()} cm².`);
  } else {
    console.log("Invalid style chosen! Please try again.");
  }
}