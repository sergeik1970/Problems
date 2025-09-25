function polishNotation(tokens) {
  let stack = [];
  for (token of tokens) {
    // Если оператор, то вытащить два последних элемента из стека и выполнить действие над ними
    if (token === "+") {
      a = stack.pop();
      b = stack.pop();
      res = b + a;
      stack.push(res);
    } else if (token === "-") {
      a = stack.pop();
      b = stack.pop();
      res = b - a;
      stack.push(res);
    } else if (token === "*") {
      a = stack.pop();
      b = stack.pop();
      res = b * a;
      stack.push(res);
    } else if (token === "/") {
      a = stack.pop();
      b = stack.pop();
      // Округление к нулю
      res = Math.trunc(b / a);
      stack.push(res);
    }
    // Если не оператор, то добавить в стек число
    else {
      stack.push(Number(token));
    }
  }
  // В конце останется только ответ
  return stack[0];
}

console.log(polishNotation(["4", "13", "5", "/", "+"]));
console.log(polishNotation(["2", "1", "+", "3", "*"]));
console.log(
  polishNotation([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ])
);
