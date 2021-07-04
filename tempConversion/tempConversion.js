const ftoc = function(temp) {
  return Number(((temp - 32) * (5/9)).toFixed(1));
};

const ctof = function(temp) {
  return Number((32 + (temp * (9/5))).toFixed(1));
};

module.exports = {
  ftoc,
  ctof
};
