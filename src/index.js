module.exports = function check(str, bracketsConfig) {
  let brackets = [], bracket = {};
  bracketsConfig.forEach((element, index) => {
    bracket[bracketsConfig[index][0]] = bracketsConfig[index][1]
  });
  for (let i = 0; i < str.split('').length; i++) {
    if (str.split('')[i] == brackets[brackets.length - 1] || str.split('')[i] == 0) {
      brackets.pop();
    } else {
      brackets.push(bracket[str.split('')[i]]);
    }

  }
  if (!brackets.length) return true
  return false;

}
