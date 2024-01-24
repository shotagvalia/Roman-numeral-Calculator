let userNumber = document.getElementById("Rnumber");
// console.log(userNumber);
let buttonClear = document.getElementById("clear");
// console.log(buttonClear);
let buttonCalculate = document.getElementById("calculate");
// console.log(buttonCalculate);
let emptyParagraph = document.getElementById("empty");
// console.log(emptyParagraph);

userNumber.addEventListener("input", () => {
  // console.log(userNumber.value);
  if (userNumber.value <= 0 || userNumber.value > 3999) {
    userNumber.value = "";
    emptyParagraph.style.display = "block";
    emptyParagraph.textContent = "Input must be at least 1 and up to 3999 ";
  }
});

buttonClear.addEventListener("click", () => {
  userNumber.value = "";
  emptyParagraph.style.display = "none";
});

buttonCalculate.addEventListener("click", () => {
  if (userNumber.value !== "") {
    let toNumber = Number(userNumber.value);
    emptyParagraph.style.display = "block";
    // emptyParagraph.style.background = "white";
    emptyParagraph.textContent = convertToRoman(toNumber);
    // console.log(typeof emptyDiv.textContent);
    // console.log(emptyDiv.textContent);
  }
});

const convertToRoman = (num) => {
  var ref = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  var res = [];

  ref.forEach((p) => {
    while (num >= p[1]) {
      res.push(p[0]);
      num -= p[1];
    }
  });
  return res.join("");
};
