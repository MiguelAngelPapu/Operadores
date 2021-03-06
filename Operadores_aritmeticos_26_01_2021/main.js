//Operacion de concatenacion 

let nombre = "Miguel Angel";
let edad = 23;
let altura = 1.80;
let profesor = true;

// Primara manera de concatenar
console.log(nombre+edad); //una de las variables tiene que ser de tipo string

// segunda manera de concatenar
console.log(""+edad+altura);// Al principio del texto tiene que llevar 
                            // la inicializacion de tipo de datos estring 
                            // **Ejemplo las comillas**  
                            // (""), ('') que identifican que el tipo de dato 
                            // es string

// tercera manera de concatenar
console.log(nombre.concat(edad));//Usando el metodo **concat** 
                                // podemos concatener cualquier 
                                // tipo de datos siempre que la variable 
                                // sea de tipo string

// cuarta manera de concatenar
console.log(nombre, edad, profesor); //Podemos concatenar las variables con **,** 
                            // pero al momento de visualizar toda la cadena 
                            // cambia **Ejemplo** si mesclamos un strin con 
                            // un numbre y un booleaon se mostrar en la pantall 
                            // pero se pordra diferenciar uno de otro ya que el 
                            // mensaje no se comportara como si guera un string 
                            // si un ropecabezas de cada tipo de dato en este 
                            // caso unsando **console.log()** no generar ningun 
                            // error pero al moneto de usar **document.write()** 
                            // no se vera el resulta deseado se mopstrar las 
                            // variables de tipo string pero las demos mostrara 
                            // el tipo de datp que conforma la variable y en 
                            // caso del evento **alert()** solo se podra usa 
                            // el simblo **+** para concatenar

// quinta manera de concatenar
console.log(`${nombre} ${edad}`);//Usando las comillas Backticks podemos 
                                // identificar cada variable de una manera 
                                // mas comda y la validacion del tipo de dato 
                                // de cada una sera mas comoda


//Operacion de decremento
let x = 10;
x--;
console.warn(`Operacion de decremento ${x}`);

//Operacion de divicion
let u = 10;
console.warn(`Operacion de divicion resultado ${u/2} valor inicial ${u}`);

//Operacion de exponenciación
let z = 10;
console.warn(`Operacion de exponenciación ${z**6} valor inicial ${z}`);

//Operacion de incremento
let o = 10;
o++;
console.warn(`Operacion de incremento ${o}`);

//Operacion de multiplicacion
let h = 10;
console.warn(`Operacion de multiplicacion ${h*6} valor inicial ${h}`);

//Operacion de modulo
let c = 10;
console.warn(`residuo de una modulo ${c%2} valor inicial ${c}`);


//Operacion de resta
let g = 10;
console.warn(`Operacion de resta ${g-2} valor inicial ${g}`);

//Ley de signos
//   +  +  + = +
//   -  +  - = +
//   -  +  + = -
//   +  +  - = -

//Operacion de unary negativo
let p = 10;
console.warn(`Operacion de unary negativo ${-p}`);

//Operacion de unary plus

let f = 10;
console.warn(`Operacion de unary plus ${+f}`);