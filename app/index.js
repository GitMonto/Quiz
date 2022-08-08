const customer = {
  firstName: "Marko",
  lastName: "Milovic",
  id: 1,
  phoneNumber: "07876132152",
  email: "mmilovic21@gmail.com",
};

customer.address = {
  street: "Blenheim Crescent",
  city: "London",
  state: "N/A",
  zipcode: "W11 1NZ",
};

console.log(`Welcome, ${customer.firstname} ${customer.lastname}!`);

const product = {
  name: "product",
  price: 100,
  description: "I am the product",
  quantity: 10,
};
customer.quantity = 7;
customer.total = customer.quantity * product.price;
console.log(customer);
console.log(`Total: $${customer.total}`);

if (customer.total > 100) {
  console.log("True");
} else {
  console.log("False");
}

product.quantity -= 7;
console.log(product.quantity);
