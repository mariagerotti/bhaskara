function delta(a, b, c) {
    return b*b - 4*a*c
}
function calcX1(delta, a, b) {
    return (-b + Math.sqrt(delta)) / (2*a)
}
function calcX2(delta, a, b) {
    return (-b + Math.sqrt(delta)) / (2*a)
}
function bhaskara(a, b, c){
    const valorDelta = calcularDelta(a, b, c)
    let x1 = 'inexistente', x2 = 'inexistente'
    if (valorDelta === 0) {
        x1 = calcX1(valorDelta, a, b)
        x2 = 'inexistente'
    }
    else if (valorDelta > 0) {
        x1 = calcX1(valorDelta, a, b)
        x2 = calcX2(valorDelta, a, b)
    }
     return { x1: x1, x2: x2}
}

console.log(bhaskara(1, -5, 4))
console.log(bhaskara(2, 5, 4))
console.log(bhaskara(1, 4, 4))