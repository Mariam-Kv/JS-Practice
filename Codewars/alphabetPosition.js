let alphabetPosition = (text) =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map((ch) => ch.charCodeAt() - 64)
    .join(" ");
console.log(alphabetPosition("a"));
