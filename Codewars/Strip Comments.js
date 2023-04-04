function solution(input, markers) {
  input = input.split("\n");

  for (let part in input) {
    for (let marker of markers) {
      if (input[part].includes(marker)) {
        let index = input[part].indexOf(marker);

        if (input[part][index - 1] === " ") {
          input[part] = input[part].slice(0, index - 1);
        } else {
          input[part] = input[part].slice(0, index);
        }
      }
    }
  }
  return input.join("\n");
}
console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
);
// result should == "apples, pears\ngrapes\nbananas"
