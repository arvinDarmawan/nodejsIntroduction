const calculation = require("./kalkulasi");

console.log("Diskon : " + calculation.hitung_diskon(100000));
console.log("Ongkir : " + calculation.hitung_ongkir(100000));
console.log("Total tagihan : " + calculation.hitung_total_tagihan(100000, 5000));
