import {Checkout} from "../src/Checkout.js";
import {expect} from "chai";

const examplePrices = {
    'A': {
        unitPrice: 50,
        special: {
            quantity: 3,
            cost: 140
        }
    },
    'B': {
        unitPrice: 35,
        special: {
            quantity: 2,
            cost: 60
        }
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
        it('should apply deals multiple times', () => {
            const cart = [{"code":"B","quantity":6}];
            const subTotal = exampleCheckout.subTotal(cart);
            expect(subTotal).to.equal(180);
        })
        it('should return 0 for an empty cart', () => {
            const cart = [];
            const subTotal = exampleCheckout.subTotal(cart);
            expect(subTotal).to.equal(0);
        })
        it('should throw an exception if an unknown product is in the cart', () => {
            const cart = [{"code":"Pizza","quantity":5000}];
            try {
                const subTotal = exampleCheckout.subTotal(cart);
            } catch (e) {
                expect(e).to.equal('No product with code Pizza found.');
                return;
            }
            fail("An exception should be thrown, but wasn't.");
        })
    })
})