class CartItem {
    code;
    quantity;
}

class Price {
    unitPrice;
    special;
}

export class Checkout {
    /**
     * Create a checkout using the given prices
     * @param prices {Object.<string, Price>}
     */
    constructor(prices) {
        this.prices = prices;
    }

    /**
     * Calculate the subtotal for the cart
     * @param cart {CartItem[]}
     */
    subTotal(cart) {
        // Converting the cart into a hash map
        // where the key is the product code
        // and the value is the quantity
        const quantities = {};
        for (let item of cart) {
            // This bit of code handles duplicates in the array by adding them to the existing count.
            if (quantities.hasOwnProperty(item.code)) {
                quantities[item.code] += item.quantity;
            } else {
                quantities[item.code] = item.quantity;
            }
        }

        let calculatedSubTotal = 0;

        // Now we apply special offers.
        for (let productCode of Object.keys(quantities)) {
            const price = this.prices[productCode];
            if (!price) {
                throw `No product with code ${productCode} found.`;
            }

            const specialOffer = price.special;
            if (!specialOffer) {
                continue;
            }

            const {quantity, cost} = specialOffer;
            const numberOfTimesToApplyOffer = Math.floor(quantities[productCode] / quantity);
            quantities[productCode] -= numberOfTimesToApplyOffer * quantity;
            calculatedSubTotal += numberOfTimesToApplyOffer * cost;
        }

        // Finally, count the remaining items.
        for (let productCode of Object.keys(quantities)) {
            const price = this.prices[productCode];
            if (!price) {
                // If there's no price, an exception should already have been thrown while applying special offers,
                // so this should never be hit. I'm throwing anyway, because it is still an error, and future changes
                // to the code might make this a possibility.
                throw `No product with code ${productCode} found. This was not caught while applying special offers.`;
            }

            calculatedSubTotal += price.unitPrice * quantities[productCode];
        }

        return calculatedSubTotal;
    }
}