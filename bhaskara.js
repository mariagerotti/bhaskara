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
    const valorDelta = delta(a, b, c)
    let x1 = 'inexistente', x2 = 'inexistente'
    if (valorDelta === 0) {
        x1 = calcX1(valorDelta, a, b)
        x2 = 'inexistente'
    }
    else if (valorDelta > 0) {
        x1 = calcX1(valorDelta, a, b)
        x2 = calcX2(valorDelta, a, b)
    }
     return {x1: x1, x2: x2}
}

function handlebtnCalcular() {
    const a = parseInt (document.getElementById('a').value)
    const b = parseInt (document.getElementById('b').value)
    const c = parseInt (document.getElementById('c').value)
    const resultado = bhaskara(a, b, c)
    document.getElementById('resultadoX1').innerHTML = 'x1: ' + resultado.x1
    document.getElementById('resultadoX2').innerHTML = 'x2: ' + resultado.x2
}


document.getElementById('btnCalcular').addEventListener('click', handlebtnCalcular)