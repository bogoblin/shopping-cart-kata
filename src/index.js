import {Checkout} from "./Checkout.js";
import * as fs from 'fs/promises';

const [pricesFile, cartFile] = process.argv.slice(2);

if (!pricesFile || !cartFile) {
    console.error(`Please provide a prices file and a cart file`);
    console.error(`Usage: node src/index.js [PRICES] [CART]`);
    process.exit(1);
}

const prices = JSON.parse(await fs.readFile(pricesFile));
const cart = JSON.parse(await fs.readFile(cartFile));

const checkout = new Checkout(prices);
console.log(checkout.subTotal(cart));