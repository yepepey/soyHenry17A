'use strict';

function BinarioADecimal(num) {
   var decimal = 0;
   var base = 1;
   for (let i = num.length - 1; i >= 0; i--) {
      let digito = parseInt(num.charAt(i));
      decimal += digito * base;
      base *= 2;
   }
   return decimal
}

function DecimalABinario(num) {
   let binary = "";
   for (let i = num; i > 0; i = Math.floor(i / 2)) {
      let digit = i % 2;
      binary = digit + binary;
   }
   return binary;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
