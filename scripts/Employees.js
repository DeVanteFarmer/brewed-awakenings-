import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

const employeeOrders = (id) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === id) {
            // Increment the number of fulfilled orders
            fulfilledOrders++
        }
    }

    // Return how many orders were fulfilled
    return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        

        if (itemClicked.dataset.type === "employee") {
            for (const employee of employees) {
                const orderCount = employeeOrders(employee.id)
                // Compare employee.id with a parsed integer from itemClicked's data-id
                if (employee.id === parseInt(itemClicked.dataset.id)) {
                    // Alert moved inside the loop and conditional
                    window.alert(`${employee.name} sold ${orderCount} products`);
                }
            }
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee"
                     data-id="${employee.id}"
                     >${employee.name}</li>`
                }

    html += "</ul>"

    return html
}

