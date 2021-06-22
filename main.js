/*   TAREA DE CONDICIONALES
alert('Bienvenido! Para guardar tus datos, ingrasa usuario y credencial porfavor!');

let nombre= prompt('Usuario');
let crede= prompt('Clave');


if((nombre=="usuario") && (crede=="credenciales")){
    console.log('Te has logueado correctamente, tus datos seran guardados!');
}else{
    console.log('La validación falló. Tus datos no se guardaran');
};





alert('Haremos una revisión de tu salud! Para ello porfavor contesta las siguientes preguntas.');


let edad = Number(prompt('¿Qué edad tienes?'));
let peso = Number(prompt('¿Cuánto pesas?'));
let estatura =Number(prompt('¿Cuánto mides?'));

let IMC = peso /(estatura*estatura);
let IMCdecimal = IMC.toFixed(2);

if(IMC <= 18.5) {
    console.log(`Cuidado! Estas por debajo de un peso saludable, porfavor acude a un profesional y chequeate!. Tienes ${edad} años y tu IMC(indice de masa corporal) es ${IMCdecimal}`);
}
else if( IMC <= 24.9) {
    console.log(`Te encuentras en un peso saludable normal, mantente así para evitar enfermedades.Tienes ${edad} años y tu IMC(indice de masa corporal) es ${IMCdecimal}`);

}
else if( 25.9 <= IMC ) {
    console.log(`Cuidado! Estas por encima de un peso saludable, porfavor acude a un profesional y chequeate!.Tienes ${edad} años y tu IMC(indice de masa corporal) es ${IMCdecimal}`);
};
*/
//PRACTICANDO BUCLES!                                                                           
let num= parseInt(prompt('Haremos la tabla del... ?(ingresa el numero que quieras calcular)'));
console.log(`TABLA DEL ${num}`);

for(let i=0; i<= 10; i++){
    let nummulti= num * i;
    console.log(`${i} x ${num} = ${nummulti}`)
};

let mostrar= prompt('¿Te muestro pares o impares de la tabla?(INDICA PAR O IMPAR))');
mostrar=mostrar.toLowerCase();
console.log(`Filtrando por ${mostrar}`);

for(let i=0; i <=10 ;i++){
    let nummulti= num * i;
    if((mostrar == 'par')||(mostrar== 'pares')){
        if(nummulti % 2== 0){ 
            console.log(`el número ${nummulti} es par`);
          }
        }else if((mostrar=='impar')||(mostrar== 'impares')){
        if(nummulti % 2!==0 ){ 
            console.log(`el número ${nummulti} es impar`);
        }
    }
};


let numlist =Number(prompt('Puedo listarte números también! Puedo hacerlo hasta del 0 al 100, hasta qué número quieres que cuente?'));
console.log('CONSTANDO...');



if(numlist <=100){
    let a= 0;
    while (a <= 100 && a <= numlist) {
    console.log(`número ${a}`);
    a++;
};
}else{
    let a= 0;
    while (a <= 100 && a <= numlist) {
        console.log(`número ${a}`);
           a++;
};
console.log('Lo siento. Sólo sé contar hasta 100...')
};
console.log('FIN DEL JUEGO! GRACIAS POR JUGAR!');

