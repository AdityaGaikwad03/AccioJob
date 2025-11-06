/* ## Assignment 1 — All pizzas must arrive (Promise.all)

### Instructions

- Reuse the pizza pattern: `orderPizza(name, time)` that always resolves with `"<name> arrived"`.
- Create three promises: “Dominos” (1200), “Pizza Hut” (2000), “Mojo” (800).
- Use `Promise.all` to wait for all.
- Log the results array and then: “All pizza arrived”. */

const orderPizza = (name, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(`${name} arrived 🍕`);
        }, time);
    });
};

const dominos = orderPizza("Dominos", 1200);
const pizzaHut = orderPizza("Pizza Hut", 2000);
const mojo = orderPizza("Mojo", 800);

Promise.all([dominos, pizzaHut, mojo])
.then((result) => {
    console.log(result);
})
.then((msg) => {
    console.log("All pizza arrived")
})
.catch((err) => {
    console.log(err)
})