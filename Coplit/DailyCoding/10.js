function insertDash(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];

    if (Number(str[i]) % 2 === 1 && Number(str[i + 1]) % 2 === 1) {
      result += "-";
    }
  }

  return result;
}
