function repeatString(message, times) {
  string = "";
  if (times < 0) return "ERROR";
  for (let i = 0; i < times; i++) {
    string += message;
  }
  return string;
}

// Do not edit below this line
module.exports = repeatString;
