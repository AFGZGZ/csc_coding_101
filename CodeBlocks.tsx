const codeBlocks = {
  variableExample: `var numero = 1
console.log(numero) //devuelve valor 1 `,
  varScope: ` var global = "soy global" 
  function nuevaFuncion() {
      var local = "soy local"
  }`,
  constExample: `const inalterable = "Super importante, no tocar"`,
  varString: `
  var texto = "El perro de Ramón..."
  var estoTambienEsTexto = "12345"
  var yEstoTambien = "😁"
  `,
  varBoolean: `
  var continua = true
  var para = false
  `,
  varArray: `var arrayDeNumeros = [1,2,3,4,5]
  arrayDeNumeros[0] //devuelve valor 1
  arrayDeNumeros[1] //devuelve valor 2
  ...
  arrayDeNumeros[4] //devuelve valor 5`,
  varObject: `var usuario = {
   nombre:"Pedro",
   apellido:"Peña", 
   telefono:600000000, 
   email:"emailfalso@email.com"}
   usuario.nombre // devuelve "Pedro"`,
  functionExample: `function nombreDeLaFuncion(a,b){ 
    return a+b 
}
nombreDeLaFuncion(1,5) // Llamando la función`,
  params: `function suma(parametro1, parametro2, ...){
    return parametro1 + parametro2 + ...
}
   suma(10,5,...) //parametro1 = 10 ...`,
  operations: `function resta(num1, num2){
    //Aquí podemos hacer movidas usando los parametros
    //por ejemplo una resta
    return num1-num2    
}
   resta(10,5)`,
  operationExp: `function LoQuieroTodo(estaVariable,num1, num2){
    estaVariable = suma(num1,mum2) * 2
    return "¡he modificado estaVariable!"
   }`,
  returnExample: `var resultado = 0
  function multiplicador(a,b){ 
   resultado = a*b // opcion 1
    return a*b // opcion 2 (recomendada)
}
resultado = multiplicador(5,2) // continuación de la opción 2`,
  conditionalSyntaxt: `tipo(condicion){si se cumple ejecuta esto}`,
  conditionals: `var edad = 25
   if (edad <= 18) {
       console.log("Tengo menos de 18")
   } else if (edad < 40 && edad > 18) {
       console.log("Tengo más de 18, pero menos de 40")
   } else {
       console.log("Tengo 40 o más")
   }`,
  loopExample: `var arrayDeNumeros = [1,2,3,4,5]
   for (var i = 0; i < arrayDeNumeros.length; i++) {
    console.log("El valor es: " + arrayDeNumeros[i])
}`,
  while: `var i = 0
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++
}
do {
    console.log("El valor de i es: " + i);
    i++
} while (i < 5)`,
  debugTools: `var test = "hola"
        console.log(test) // devuelve "hola"
        console.log(typeof test) // devuelve "string"
        console.log(test.length) // devuelve 4`,
};

export default codeBlocks;
