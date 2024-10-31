let fruta = "banana"

switch (fruta) {
    case "laranja":
        console.log("Suco de laranja")
        break
    case "banana":
    case "morango":
        console.log("vitamina")
        break
    case "maça":
        console.log("suco de maça")
        break

    default:
        console.log("suco genérico")
}