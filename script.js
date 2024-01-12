function calcularFactorial() {
    var numeroIngresado = document.getElementById('numeroIngresado').value;
    var numero = parseFloat(numeroIngresado);
    if (isNaN(numero)) {
        alert('Por favor, ingrese un número válido.');
        return;
    }
    var resultado = 1;
    for (var i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    document.getElementById('textoResultado').innerHTML = `El factorial del numero ${numero} es ${resultado}`;
}