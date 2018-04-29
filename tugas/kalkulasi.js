const hitung_diskon = (x) => {
  return  x*0.05;
};

const hitung_ongkir = (x) => {
  return x + 15000;
};

const hitung_total_tagihan = (x, y) => {
  return x + y;
};

module.exports = {hitung_diskon, hitung_ongkir, hitung_total_tagihan};
