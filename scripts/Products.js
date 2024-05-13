import { getProducts } from "./database.js"

const products = getProducts()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "product") {
            for (const product of products) {
                // Compare product.id with a parsed integer from itemClicked's data-id
                if (product.id === parseInt(itemClicked.dataset.id)) {
                    // Alert moved inside the loop and conditional
                    window.alert(`${product.name} costs $${product.price}`);
                }
            }
        }
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-id="${product.id}" data-price="${product.price}"
                     data-type="product">
                     ${product.name}
                 </li>`
    }

    html += "</ul>"

    return html
}

