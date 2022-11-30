const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const conditionOne = true;
const conditionTwo = false;

console.log(conditionOne && conditionTwo);

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
console.log(listaDeCompras);

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


/*exercicio 1 - AND*/
const currentHour = 12;
let message = "";

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
  console.log(message);
} else if (currentHour < 22 && currentHour >= 18) {
  message = 'Rango da noite, vamos jantar :D';
  console.log(message);
} else if (currentHour < 18 && currentHour >= 14) {
  message = 'Vamos fazer um bolo pro café da tarde?';
  console.log(message);
} else if (currentHour < 14 && currentHour >= 11) {
  message = 'Hora do almoço!!!';
  console.log(message);
}else if (currentHour < 11 && currentHour >= 4) {
  message = 'Hmmm, cheiro de café recém-passado';
  console.log(message);
}



const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

/*exercicio 2 -OR*/
let weekDay = "quarta-feira";

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else {
  console.log('FINALMENTE, descanso merecido UwU');
}