import {Checkout} from "../src/Checkout.js";
import {expect} from "chai";

const examplePrices = {
    'A': {
        unitPrice: 50,
        special: [3, 140]
    },
    'B': {
        unitPrice: 35,
        special: [2, 60]
    },
    'C': {
        unitPrice: 25
    },
    'D': {
        unitPrice: 12
    }
};

describe('Checkout', () => {
    const exampleCheckout = new Checkout(examplePrices);

    describe('#subTotal()', () => {
        it('should return the correct amount for the example data', () => {
            const exampleCart = [{"code":"A","quantity":3},{"code":"B","quantity":3},{"code":"C","quantity":1},{"code":"D","quantity":2}];
            const subTotal = exampleCheckout.subTotal(exampleCart);
            expect(subTotal).to.equal(284); // calculated by hand
        })
    })
})