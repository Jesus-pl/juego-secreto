let numeroSecreto = 0;
let intentos =1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// elemento a un clic y primera funcion 
//declaramos la funcion que agregamos al html
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroUsuario===numeroSecreto){
        asignar('p',`acertaste el numero , en ${intentos} ${(intentos==1)?'vez':'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else{
        if (numeroUsuario>numeroSecreto){
            asignar('p','el numero es menor')} 
            else{
                asignar('p','el numero secreto es mayor')
            }
    }
    limpiar();
    intentos ++
}
function reiniciarJuego(){
    // limpiar caja 
    limpiar()
    //indicar mensaje de inicio 
    textosIniciales()
    //generar el numero aleatorio 
    numeroSecreto = generarNumeroSecreto();
    // deshabilitr el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled',true)
    //incializar el numero de intento 
    intentos=1
}


function limpiar(){
   document.querySelector('#valorUsuario').value='';
}
//asignacion de texto a un elemento html

function asignar(elemento , texto){
    let elemenotHTML = document.querySelector(elemento);//puente para unir html y java  , es un objetro
    elemenotHTML.innerHTML=texto; //declarador de titulo
    return
} 
function textosIniciales(){
    asignar('h1', 'juego del numero secreto');
    asignar('p',`selecciona un numero del 1-${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos=1
}
 //evitamos declarara cada vairbale y acortamos el codigo 
/* la foma de trabajar se declara la funcion y estabalcemos dos paramatreo sen este caos elemento y texto 
de seclara el delemento mediante el document.querySlector ( nos dejara tomar un elemeto html) y poder tarabjar con el 
luego con el innehtml podemos declarar el contenido textual del elemento seleecionnado luego usamos el nombre de la fuuncion 
para elegir su contenido */
/*function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1
}*/

textosIniciales()

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
    console.log(listaNumerosSorteados);
    console.log (numeroGenerado)
    if (listaNumerosSorteados.length == numeroMaximo){
        asignar('p',`se sortearon todos los numeros posibles `)
    }else{
        if (listaNumerosSorteados. includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
        
    // Si ei numero generado está incluido en la lista
   
}
