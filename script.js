const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

result.style.display = "none";

checkButton.onclick = checkPalindrome;

function isPalindrome() {
  result.style.display = "block";
  result.innerText = textInput.value + " is a palindrome";
}

function isNotPalindrome() {
  result.style.display = "block";
  result.innerText = textInput.value + " is not a palindrome";
}

function emptyInput() {
  alert("Please input a value");
}

function checkPalindrome() {
  const regex = /[^a-z0-9]/gi;
  const cleaned = textInput.value.replace(regex, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  
  if (cleaned === ""){
    emptyInput();

  }
  else{

  
   if (cleaned === reversed) {
    isPalindrome();
  } 
  else {
    isNotPalindrome();
  }
  }
}