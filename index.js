let monitor = prompt("¿Desea comprar un monitor? El costo es 260 Dolares - Ingrese la palabra monitor");
let oportunidadesp1 = 2;

while (monitor.toLowerCase() != "monitor" && oportunidadesp1 > 0) {
    alert(`Si no ingresas mmonitor en las ${oportunidadesp1} siguientes oportunidades pasaremos al proximo producto`)
    oportunidadesp1--;
    monitor = prompt("¿Desea comprar un monitor? El costo es 260 Dolares - Ingrese la palabra monitor");
    if (monitor.toLowerCase() != "monitor" && oportunidadesp1 == 0) {
        alert("Pasaremos al siguiente producto, continuemos");
    }
    else if (monitor.toLowerCase() == "monitor" && oportunidadesp1 == 0) {
        alert("Muy bien, sigue comprando");
    }
}
let pregunta2 = prompt("¿Desea comprar un CPU? El costo es 1250 Dolares - Ingrese la palabra cpu");
let oportunidadesp2 = 2;
while (pregunta2.toLowerCase() != "cpu" && oportunidadesp2 > 0) {
    alert(`Si no ingresas cpu en las ${oportunidadesp2} siguientes oportunidades pasaremos al proximo producto`)
    oportunidadesp2--;
    pregunta2 = prompt("¿Desea comprar un CPU? El costo es 125 Dolares - Ingrese la palabra cpu");
    if (pregunta2.toLowerCase() != "cpu" && oportunidadesp2 == 0) {
        alert("Pasaremos al siguiente producto, continuemos");
    }
    else if (pregunta2.toLowerCase() == "cpu" && oportunidadesp2 == 0) {
        alert("Muy bien, sigue comprando")
    }
}
let pregunta3 = prompt("¿Desea comprar Teclado-Mouse-Auricular con microfono? El costo es 135 Dolares - Ingrese la palabra accesorios");
let oportunidadesp3 = 2;
while (pregunta3.toLowerCase() != "accesorios" && oportunidadesp3 > 0) {
    alert(`Si no ingresas cpu en las ${oportunidadesp3} siguientes pasaremos a darte el precio final de la compra`)
    oportunidadesp3--;
    pregunta2 = prompt("¿Desea comprar Teclado-Mouse-Auricular con microfono? El costo es 135 Dolares - Ingrese la palabra accesorios");
    if (pregunta3.toLowerCase() != "accesorios" && oportunidadesp3 == 0) {
        alert("Pasaremos al resumen, continuemos");
    }
    else if (pregunta3.toLowerCase() == "accesorios" && oportunidadesp3 == 0) {
        alert("Muy bien, sigue adelante");
    }
}
if (oportunidadesp1 > 0) {
    monitor = 260;
}
else {
    monitor = 0;
}
if (oportunidadesp2 > 0) {
    cpu = 1250;
}
else {
    cpu = 0;
}
if (oportunidadesp3 > 0) {
    accesorios = 135;
}
else {
    accesorios = 0;
}
let resultado = monitor + cpu + accesorios;
document.write(`El precio es ${resultado} Dolares`);

