const convertToCelsius = function (degreeFahrenheit) {
  return (degreeCelsius =
    Math.round((((degreeFahrenheit - 32) * 5) / 9) * 10) / 10);
};

const convertToFahrenheit = function (degreeCelsius) {
  return (degreeFahrenheit =
    Math.round((degreeCelsius * (9 / 5) + 32) * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
