let invoice = {
    name: "Leo",
    age: 19,
    products: {
        0 : ["mouse 2xwm", 22.90],
        1 : ["Teclado mecânico", 129.99],
        2 : ["Monitor",899.99] 
    }    
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}
