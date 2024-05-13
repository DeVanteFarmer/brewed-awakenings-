import { getProducts, getEmployees, getOrders } from "./database.js"

// Get a copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()

// Function whose responsibility is to find the product for an order
const findProduct = (order) => {
    for (const product of products) {
        if (product.id === order.productId) {
            return product;
        }
    }
    return null; // Return null if no product is found
}

// Function whose responsibility is to find the employee for an order
const findEmployee = (order) => {
    for (const employee of employees) {
        if (employee.id === order.employeeId) {
            return employee;
        }
    }
    return null; // Return null if no employee is found
}

export const Orders = () => {
    let html = "<ul>";

    for (const order of orders) {
        const employee = findEmployee(order);
        const product = findProduct(order);

        if (employee && product) { // Check if both employee and product were found
            html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`;
        }
    }

    html += "</ul>";
    return html;
}


