const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

convertBtn.addEventListener("click", converter);
output.style.display = "none";


function converter() {
  output.style.display = "block";
  const raw = input.value;
  const num = parseInt(raw);

  if (!raw || isNaN(num)) {
    output.textContent = "Please enter a valid number";
    return;
  }
  if (num < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
    return;
  }
  if (num > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let roman = "";
  let n = num;
  for (let i = 0; i < val.length; i++) {
    while (n >= val[i]) {
      n -= val[i];
      roman += syms[i];
    }
  }

  output.textContent = roman;
}