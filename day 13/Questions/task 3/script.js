// WAP to check for palindrome of a string and accept input from browser
let num = prompt("Enter a number:");
let original = num;
let reversed = "";

for (let i = original.length - 1; i >= 0; i--) {
  reversed += original[i];
}

if (original === reversed) {
  alert(original + " is a palindrome");
} else {
  alert(original + " is not a palindrome");
}
