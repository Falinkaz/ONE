//estas son las varibles:
let topNumero = 100
let numeroSecreto = Math.floor(Math.random()*topNumero)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3
//console.log(numeroSecreto)
while (numeroSecreto != numeroUsuario) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${topNumero} por favor:`));

    console.log(typeof(numeroUsuario));
    /* 
    Este código realiza la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        // Right number:
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        //Wrong number:
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //intentos = intentos +1;
        intentos++; //esto logra lo mismo que la línea anterior, sumando 1 a la variable intentos
        //palabraVeces = 'intentos';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
    }