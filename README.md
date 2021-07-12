# Shopping Cart Kata

## Setup

Run `npm install` to install the dependencies.

## Running tests

`npm test` runs the mocha tests.

## Running the program

`npm start` runs the program using prices.json and cart.json. To change the input data, you can either change these
files, or run the program with different arguments, like:

`node src/index.js my_prices.json my_cart.json`

If both files are valid, the program will print out the cost of the cart according to the prices.

If a product is in the cart that isn't specified in the prices file, an error will be thrown.