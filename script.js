//Esto agrega a la pantalla el valor del botón que clickeemos en la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
//Esto vacía la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}
//Esto ejecuta el cálculo
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}
//Esto ejecuta los dados
function tirarDado(valor) {
    const partes = valor.toLowerCase().split('d');
    const cantidad = parseInt(partes[0]) || 1;
    const caras = parseInt(partes[1]);

    const carasValidas = [2, 3, 4, 5, 6, 8, 10, 12, 20, 100];
    if (!carasValidas.includes(caras)) {
        alert("Solo se permiten dados de 2, 3, 4, 5, 6, 8, 10, 12, 20 y 100 caras.");
        return;
    }

    let suma = 0;
    let resultados = [];

    for (let i = 0; i < cantidad; i++) {
        let tirada = Math.floor(Math.random() * caras) + 1;
        resultados.push(tirada);
        suma += tirada;
    }

    // Si el número de dados es grande, mostrar solo la suma
    if (cantidad > 10) {
        document.getElementById('pantalla').value += ` + ${suma}`;
    } else {
        const expresion = `(${resultados.join(" + ")})`;
        document.getElementById('pantalla').value += ` + ${expresion}`;
    }
}

//Esto ejecuta tiradas especiales
function tirarDadoCustom() {
    const input = document.getElementById('customRoll').value.trim();
    
    if (!input.match(/^\d+d\d+$/)) {
        alert("Formato inválido. Usa números como: 23d10.");
        return;
    }

    const partes = input.toLowerCase().split('d');
    const cantidad = parseInt(partes[0]) || 1;
    const caras = parseInt(partes[1]);

    const carasValidas = [2, 3, 4, 5, 6, 8, 10, 12, 20, 100];
    if (!carasValidas.includes(caras)) {
        alert("Solo se permiten dados de 2, 3, 4, 5, 6, 8, 10, 12, 20 y 100 caras.");
        return;
    }

    let resultados = [];
    for (let i = 0; i < cantidad; i++) {
        resultados.push(Math.floor(Math.random() * caras) + 1);
    }

    const suma = resultados.reduce((a, b) => a + b, 0);

    // Insertar saltos de línea cada 7 resultados
    let resultadoFormateado = "";
    resultados.forEach((num, index) => {
        resultadoFormateado += num + " ";
        if ((index + 1) % 7 === 0) {
            resultadoFormateado += "\n"; // Salto de línea cada 7 resultados
        }
    });

    const expresion = `(${resultadoFormateado.trim()}) = ${suma}`;

    document.getElementById('pantalla').value += ` + ${expresion}`;
}