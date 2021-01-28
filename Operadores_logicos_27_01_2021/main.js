// Operador AND **$$**

let afirmacion = true;
let negacion = false;

console.log(`%cOperador AND '&&'`, "color:red;");
console.log(`${negacion} && ${negacion} = ${negacion&&negacion}`);
console.log(`${negacion} && ${afirmacion} = ${negacion&&afirmacion}`);
console.log(`${afirmacion} && ${negacion} = ${afirmacion&&negacion}`);
console.log(`${afirmacion} && ${afirmacion} = ${afirmacion&&afirmacion}`);

console.log(`%cOperador OR '||'`, "color:blue;");
console.log(`${negacion} || ${negacion} = ${negacion||negacion}`);
console.log(`${negacion} || ${afirmacion} = ${negacion||afirmacion}`);
console.log(`${afirmacion} || ${negacion} = ${afirmacion||negacion}`);
console.log(`${afirmacion} || ${afirmacion} = ${afirmacion||afirmacion}`);

console.log(`%cOperador NOT '!'`, "color:orange;");
console.log(`${negacion} ! = ${negacion}`);
console.log(`${afirmacion} ! = ${afirmacion}`);


// let num1 = 38, num2 = 5, num3 = 80, num4 = 99, num5 = 80;
// console.log( (num3!==num5) && (num1<=num4) || !(num2==num5));

             


