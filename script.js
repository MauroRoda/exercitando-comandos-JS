// Exercicio Criaçãod e função, Arreys, variaveis, argumentos, laços...

// criar um sistema de um colegio com nome dos alunos e notas

// Nome do aluno - nota 1 - nota 2 - média - aprovado/ reprovado



//Arreys com os dados dos alunos
let nomes = ["Igor","Maria","Jose"];
let notasA =[7.0,6.5,9.5];
let notasB =[8.0,3.7,9.4];

//Função com o calculo da media
function media(n1,n2) {
    return (n1 + n2) / 2
}

// Nova função estado aprovado ou nao do aluno

function passou(media){

    let resultado = "Reprovado";

    if(media > 7){
        return "Aprovado";
    }else{
        return "Reprovado";
    }
}


//Iniciando a lista e a apresentação dos dados

for(let index in nomes){
    let nota1 = notasA[index];
    let nota2 = notasB[index];
    let m = media(nota1, nota2);

    console.log(nomes[index] + " - " + nota1 + " - " + nota2+ " - " + m + " - " + passou(m));
}