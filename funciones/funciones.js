// Crea una funcion llamada (letter) ingresar cualquier letra del alfabeto y verifique si es vocal o consonante (vocal) si la letra es una vocal y (consonante) si la letra es una consonante.


// && And sirve para aceptar ambas condiciones
// || or sirve si al menos una de las opciones es verdadera


//function letter(letra){

  //  if (typeof letra != 'number'){
    //   if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ){
      //  console.log("vocal");
    //} else {
     //   console.log("consonante");
    //}
    //} else {
     //   console.log('caracter invalido');
    //}
//}


//letter('c');

//crea una funcion llamda multiple que reciba como parametro un numero
//para evaluar si un numero es divisible entre 5 y 11 o no lo es.
//en caso de que si, retornar true si no , falso

function multiple (num){

    if (num %5 === 0 && num%11 == o){
        console.log (true);
    }else {
        console.log(false);
    }
}

multiple()


// crea una funcion llamada largest que reciba como parametro un arreglo de numeros
// esta funcion debe retornar el numero mas grande del arreglo


let mayor = [1, 2, 3, 4,];// cero   hacer que escoja el menor tarea
let otro = [20, 18, 4, 59, 1];


function largest (arreglo){

    let numero = 0;
    for (let i = 0;  i <= arreglo.length; i++){
        if (arreglo[i] > numero){
            numero = arreglo[i];
        } 
    }


    console.log(numero);
}

largest(mayor);


//crea una funcion llamada "game" que simule el juego piedra papel o tijeras
//la funcion recibira como parametros game("piedra", "papel")
//jugador 1 ha seleccionado "piedra"
// y jugador 2 ha seleccionado "papel" por lo tanto el ganador es el jugador 2
// la funcion unicamente recibira "piedra", "papel" o "tijeras"
//"jugador 1"
//"jugador 2"
//"empate"





function game(jugador1, jugador2){

        // pasos en los que gana jugador 1
    if (jugador1 == "piedra" && jugador2 == "tijera"){
        console.log(" jugador 1 gana");

    }if(jugador1 == "tijera" && jugador2 == "papel"){
        console.log('jugador 1 gana');

    }if (jugador1 == "papel" && jugador2 == "piedra"){
        console.log('jugador 1 gana');
//pierde jugador 1
    }if (jugador1 == "piedra" && jugador2 == "papel"){
        console.log("jugador 1 pierde");

    }if (jugador1 == "tijera" && jugador2 == "piedra"){
        console.log('jugador 1 pierde');

    }if (jugador1 == "papel" && jugador == "tijera"){
        console.log('jugador 1 pierde');
        //empate
    }if (jugador1 == jugador2)
    console.log('empate');

}







let numero = [8, 2, 3, 4,];// cero   hacer que escoja el menor tarea
 let min = arreglo[0];


    for (let i = 0;  i <= arreglo.length; i++){
        if (arreglo[i] < numero){
            numero = arreglo[i];
        } 
    }


    console.log(numero);

largest(min);
