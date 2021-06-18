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


