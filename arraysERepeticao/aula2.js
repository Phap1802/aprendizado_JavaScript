/*
    ESTRUTURA DE REPETIÇÃO 'LOOP'

 */

//------------------------------------------------------------------

const notas = [];

notas.push(5);
notas.push(6);
notas.push(7);
notas.push(10);
notas.push(9);

let soma = 0;

//Repetiução "FOR"  = "para" ( usado quando voce tem um limite a chegar )
for (let i = 0; i < notas.length;  i++) {
                    // o i++ é i= 1 + 1;
    const nota = notas[i];

    soma = soma + nota; 

}

const media = soma / notas.length;
console.log(media.toFixed(2));



