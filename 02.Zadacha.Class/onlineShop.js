class OnlineShop {

    //конструктор
    constructor(number) {
        this.warehouseSpace  = number;
        this.products = [];
        this.sales = [];
    }
    //функция, проверява дали има достатъчно място в склада
    loadingStore(product, quantity, spaceRequired){
        if(spaceRequired> this.warehouseSpace){
            throw new Error("Not enough space in the warehouse.");
        };
        this.warehouseSpace -= spaceRequired;
        this.products.push({ product, quantity });
        
        return `The ${product} has been successfully delivered in the warehouse.`;
        
    };
    //функция, която проверява дали има достатъчно от даден продукт в склада
    quantityCheck(product, minimalQuantity) {
        const foundProduct = this.products.find((p) => p.product === product);
        if (!foundProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        if (minimalQuantity <= foundProduct.quantity) {
            return `You have enough from product ${product}.`;
        } else {
            const currentQuantity = foundProduct.quantity;
            foundProduct.quantity = minimalQuantity;
            return `You added ${minimalQuantity - currentQuantity} more from the ${product} products.`;
        }
    }
    //функция, която проверява дали има даден продукт в склада и ако го има го маха от склада и го добавя в продажбите
    sellProduct(product) {
        const foundProduct = this.products.find((p) => p.product === product);
        if (!foundProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        foundProduct.quantity--;
        this.sales.push({ product, quantity: 1 });
        return `The ${product} has been successfully sold.`;
    }
    //функция, която отчита броя на продажбите и отпечатва всички продукти от склада
    revision() {
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!");
        }
        const result = [];
        let soldProduct = 0;
        this.sales.forEach((sale) => (soldProduct += sale.quantity));
        result.push(
            `You sold ${soldProduct} products today!`,
            "Products in the warehouse:"
        );
        this.products.forEach((p) => result.push(`${p.product}-${p.quantity} more left`));
        return result.join("\n");
    }

        

}
const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore("headphones", 10, 200));
console.log(myOnlineShop.loadingStore("laptop", 5, 200));
console.log('--------------------------------');
console.log(myOnlineShop.quantityCheck("headphones", 10));
console.log(myOnlineShop.quantityCheck("laptop", 10));
console.log('--------------------------------');
console.log(myOnlineShop.sellProduct("headphones"));
console.log(myOnlineShop.sellProduct("laptop"));
console.log('--------------------------------');
console.log(myOnlineShop.revision());