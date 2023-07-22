/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   Math.pow(num,2);
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   Math.pow(2,3);
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   Math.pow(num,exponent);
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   Math.round(num);
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   Math.cell(num);
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
  Math.random(123);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
