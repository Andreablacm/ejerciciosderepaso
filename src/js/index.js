// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

//- Escribe una función que reciba un número y lo devuelva sumando 2.

const numberPlusTwo = (number) => {
  return number + 2;
};

const solutionNumberPlusTwo = numberPlusTwo(3);
console.log(solutionNumberPlusTwo);

//- Escribe una función que reciba un número y devuelva el doble de ese número.

const numberDouble = (number) => {
  return number * 2;
};
const solutionNumberDouble = numberDouble(4);
console.log(solutionNumberDouble);

//- Escribe una función que reciba una palabra y devuelva su longitud.

const wordLength = (word) => {
  return word.length;
};

const returnWordLength = wordLength("Hola");
console.log(returnWordLength);

//- Escribe una función que reciba una palabra y la imprima en mayúsculas.

const upperWord = (word) => {
  return word.toUpperCase();
};

const returnUpperWord = upperWord("hola");
console.log(returnUpperWord);

//- Escribe una función que reciba dos palabras e imprima si son iguales o no

const sameWords = (a, b) => {
  if (a === b) {
    console.log("Estas palabras son iguales");
  } else {
    console.log("Estas palabras no son iguales");
  }
};

sameWords("Cactus", "Monstera");

//- Crea una función que tome dos números como parámetro y devuelva su multiplicación.

const numbersMultiply = (a, b) => {
  return a * b;
};
const resultNumbersMultiply = numbersMultiply(2, 3);
console.log(resultNumbersMultiply);

//- Crea una función llamada sumDigits que tome un número de 3 cifras como parámetro y devuelva la suma de sus dígitos.

const sumDigits = (num) => {
  const operation =
    Number(num.charAt(0)) + Number(num.charAt(1)) + Number(num.charAt(2));

  return operation;
};

const returnOperation = sumDigits("200");
console.log(returnOperation);

//- Crea una función llamada longestWord que reciba 2 palabras como parámetro y devuelva la palabra más larga.

const longestWord = (wordA, wordB) => {
  if (wordA.length > wordB.length) {
    return wordA;
  } else {
    return wordB;
  }
};

const returnLongestWord = longestWord("Hola", "Adios");
console.log(returnLongestWord);

//- Escribe una función llamada getfirstElement que reciba un array y devuelva la primera posición del array.

const getfirstElement = (array) => {
  return array[0];
};

const positionGetfirstElement = getfirstElement([4, 2, 3]);
console.log(positionGetfirstElement);

//- Escribe una función llamada getArrayElement que reciba un array y una posición y devuelva el valor de esa posición en el array, por ejemplo, si recibe (['a', 'b', 'c'], 2) devolverá 'c'

const getArrayElement2 = (array, position) => {
  return array[position];
};

const resultArrayElement2 = getArrayElement2([1, 2, 3], 0);
console.log(resultArrayElement2);

//- Crea una función llamada shortestWord que reciba 2 palabras como parámetro y devuelva la palabra más corta.

const shortestWord = (wordA, wordB) => {
  if (wordA.length < wordB.length) {
    return wordA;
  } else {
    return wordB;
  }
};

const resultShortestWord = shortestWord("casa", "perro");
console.log(resultShortestWord);

//- Crea una función llamada onlyEven que reciba 3 números e imprima sólo los números pares.

const onlyEven = (a, b, c) => {
  if (a % 2 === 0) {
    console.log(a);
  }

  if (b % 2 === 0) {
    console.log(b);
  }

  if (c % 2 === 0) {
    console.log(c);
  }
};

onlyEven(2, 5, 6);
//- Crea una función que reciba un número y devuelva su cuadrado y su cubo. El objeto Math tiene el método pow que sirve para calcular potencias, Math.pow(base, exponente)

const numberPow = (number) => {
  const square = Math.pow(number, 2);
  const cube = Math.pow(number, 3);

  return `el cuadrado de ${number} es ${square} y el cubo es ${cube}`;
};

const resultNumberPow = numberPow(2);
console.log(resultNumberPow);

//- Crea una función que reciba una palabra de 5 letras e imprima por consola las 5 letras separadas por comas.

const lettersJoinWithComma = (word) => {
  console.log(
    `${word.charAt(0)}, ${word.charAt(1)}, ${word.charAt(2)}, ${word.charAt(
      3
    )}, ${word.charAt(4)} `
  );
};

lettersJoinWithComma("Adios");

//- Crea una función que reciba un array de 3 números y lo imprima con los números duplicados, por ejemplo, si recibe [1,2,3] deberá imprimir [1,2,3,1,2,3]

//- Crea una función que reciba un array de 5 números y que lo imprima sin el primer y el último valor, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir [2,3,4]

//- Crea una función que reciba un array con 5 letras y que imprima las 5 letras unidas en una sola palabra

//- Crea una función llamada longestWordArray que reciba un array con 3 palabras y devuelva la palabra más larga del array.

//- Crea una función que reciba un array con 3 números y un array con 3 letras e imprima los números y las letras intercaladas, por ejemplo, si recibe ([1,2,3],['a','b','c']) deberá imprimir 1,a,2,b,3,c

//- Crea una función que reciba un array con un número impar de elementos e imprima por consola el valor de la posición central, por ejemplo, si recibe [1,2,3,4,5] deberá imprimir 3, pero si recibe [1,2,3] deberá imprimir 2, si el número de elementos no es impar deberá imprimir "el array no es válido"

//- Crea una función que reciba una palabra de 5 letras e imprima sólo las vocales, por ejemplo, si recibe "hola" deberá imprimir "oa"
