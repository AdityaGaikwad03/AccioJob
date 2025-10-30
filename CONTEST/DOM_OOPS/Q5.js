/* Q5. Create a Product class with properties name, price, discount and methods
getPriceAfterDiscount() and displayInfo(). Create two product objects and log their discounted
prices.
 */
class Product {
  constructor(name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }

  getPriceAfterDiscount() {
    return this.price - (this.price * this.discount) / 100;
  }

  displayInfo() {
    console.log(`${this.name}: ₹${this.getPriceAfterDiscount()}`);
  }
}

const p1 = new Product("Laptop", 50000, 10);
const p2 = new Product("Phone", 20000, 5);

p1.displayInfo();
p2.displayInfo();
