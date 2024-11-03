let userName = getFirtsName("Leo-front- end", "-")
console.log(`Seja vem vindo ${userName}`)

userName = getFirtsName("Leo front end", " ")
console.log(`Seja vem vindo ${userName}`)
function getFirtsName(name,splitChar = " ") {
    let firstName =  name.split(splitChar)[0] 
    return firstName 
}