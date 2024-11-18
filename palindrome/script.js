const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const resultText = document.getElementById("result");
const regex = /[\W_]/g;

// Clean non-alphanumeric characters from input
const sanitizeInput = (input) => {
  return input
};

// Is the word a palindrome?
const checkPalindrome = (input) => input === input.split('').reverse().join('');

// Check input
console.log(inputText?.value);
const checkInput = () => {
  if (inputText?.value) {
    return sanitizeInput(inputText?.value.toLowerCase().replace(regex,''));
  } else {
    alert("Please input a value");
  }
};

// Event Listener for button
checkButton.addEventListener("click", () => {
  const checkString = checkInput(inputText?.value);
  const isPalindrome = checkPalindrome(checkString);
  console.log(checkString);

  // Escape if there is no input text
  if (!inputText?.value) {
    return;
  }
  
  // If the word is a palindrome, alter the result text
    resultText.innerText = isPalindrome ? `${inputText.value} is a palindrome` : `${inputText.value} is not a palindrome`;
    resultText.classList.add("ispalindrome");
});