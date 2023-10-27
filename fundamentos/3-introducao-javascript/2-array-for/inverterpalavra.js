/* Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.

De olho na dica 👀: Pesquise sobre os seguintes métodos: split(), reverse() e join();*/

let word = '';
let wordReverse = '';

function verifyPalindrome(word) {
  reverseWord = word.split('').reverse().join('');
  if (word === wordReverse){
  return (true)
} else if (word !== wordReverse){
  return (false)
}}

console.log(verifyPalindrome('arara'));