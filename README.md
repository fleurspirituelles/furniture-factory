# Furniture Factory

This project implements a **Furniture Factory** using TypeScript. It allows users to create different styles of furniture (ArtDeco, Victorian, Modern) and choose between a full set of matching furniture or mix and match different styles.

## Features

- **Multiple Furniture Styles**: ArtDeco, Victorian, and Modern.
- **Dynamic Selection**: Users can dynamically choose their own furniture style or mix different styles.
- **Style Consistency Checks**: The system verifies whether the selected furniture pieces match in style.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [TypeScript](https://www.typescriptlang.org/) (version 4.x or higher)

Verify installation by running:

```bash
node -v
tsc -v
```

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fleurspirituelles/furniture-factory.git
   cd furniture-factory
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Compile the TypeScript code**:

   ```bash
   npm run build
   ```

4. **Run the program**:

   ```bash
   node dist/main.js
   ```

## Usage

Once the program is running, the terminal will display the following options:

- **Option 1**: Choose a full set of furniture that matches in style (ArtDeco, Victorian, or Modern).
- **Option 2**: Mix and match different furniture styles (e.g., ArtDeco chair, Victorian sofa, Modern coffee table).
- **Option 0**: Exit the program.

### Running Tests

To test mixed furniture styles, select **option 2** to verify their compatibility.

## Project Structure

The project is structured as follows:

```
furniture-factory/
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── src/
│   ├── client.ts
│   ├── main.ts
│   ├── tests.ts
│   ├── components/
│   │   ├── Chair.ts
│   │   ├── CoffeeTable.ts
│   │   └── Sofa.ts
│   └── factories/
│       ├── FurnitureFactory.ts
│       ├── ArtDeco/
│       │   ├── ArtDecoChair.ts
│       │   ├── ArtDecoCoffeeTable.ts
│       │   ├── ArtDecoFurnitureFactory.ts
│       │   └── ArtDecoSofa.ts
│       ├── Modern/
│       │   ├── ModernChair.ts
│       │   ├── ModernCoffeeTable.ts
│       │   ├── ModernFurnitureFactory.ts
│       │   └── ModernSofa.ts
│       └── Victorian/
│           ├── VictorianChair.ts
│           ├── VictorianCoffeeTable.ts
│           ├── VictorianFurnitureFactory.ts
│           └── VictorianSofa.ts
```

## License

This project is licensed under the GNU License - see the [LICENSE](LICENSE) file for details.
