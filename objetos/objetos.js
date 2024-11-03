let name = "Leo"
let age = 19
let products = ["mouse 2xwm", "Teclado mecânico", "Monitor"]
let productsValues = [22.90, 129.99, 899.99]

generateInvoice(name, products, productsValues,age)

function generateInvoice(name, products, productsValues, age){
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("O produto é "+ products[0])
    console.log("O valor é " + productsValues[0])
}