let num = 77;
let index = 0;
let numbers = [
  "10",
  "18",
  "6",
  "0",
  "20",
  "1",
  "7",
  "14",
  "12",
  "8",
  "4",
  "2",
  "15",
  "19",
  "16",
  "3",
  "5",
  "11",
  "13",
  "9",
  "17",
  "22",
  "55",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "23",
  "31",
  "49",
  "51",
  "50",
  "53",
  "33",
  "38",
  "70",
  "44",
  "66",
  "25",
  "74",
  "37",
  "39",
  "42",
  "75",
  "34",
  "57",
  "40",
  "35",
  "48",
  "68",
  "69",
  "73",
  "29",
  "59",
  "45",
  "32",
  "54",
  "67",
  "56",
  "72",
  "52",
  "26",
  "28",
  "77",
  "76",
  "58",
  "36",
  "47",
  "21",
  "71",
  "30",
  "41",
  "24",
  "43",
  "46",
  "27",
];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (Number(numbers[i]) + Number(numbers[j]) === 77) {
      if (i < j) {
        console.log([i, j, "=", numbers[i], numbers[j], j - i]);
      }
    }
  }
}
/*let result = [];
console.log(9);
fetch("04.txt")
  .then((response) => response.text())
  .then((text) => {
    let data = text.split(", ");
    for (let i = 0; i < data.length; i++) {
      if (result.includes(data[i]) === false && data[i] < 78) {
        result.push(data[i]);
      }
    }

    console.log(result);
    console.log(numbers);
  });
*/
