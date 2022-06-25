// // Cara 1
// const calculator = require("./utils/calculator"); // ini memanggil semua yg ada di "Modul Calculator"

// const tambahkan1 = calculator.addition(3, 4);

// console.log(tambahkan1);

// // Cara 2.1
// const { substract } = require("./utils/calculator"); // Hanya memanggil 1 fungsi dari "Modul Calculator"

// const kurangkan1 = substract(5, 4);

// console.log(kurangkan1);

// Cara 2.2
const { addition, substract } = require("./utils/calculator"); // memanggil 2 fungsi atau lebih dari "Modul Calculator"

const tambahKurang = function (a, b) {
  return `${a} + ${b} = ${addition(a, b)}
  ${a} - ${b} = ${substract(a, b)}`;
};
// const tambahkan2 = addition(4, 7);
// const kurangkan2 = substract(5, 2);

// console.log(
//   `
//   Hasil dari 4 + 7 adalah ${tambahkan2}
//   dan Hasil dari 5 - 2 adalah ${kurangkan2}
//   `
// );

console.log(tambahKurang(4, 2));
