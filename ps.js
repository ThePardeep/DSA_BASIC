function PalindromicString(str) {
  let i = 0;
  let j = str.length - 1; // 4
  while (i <= j) {
    if (str[i] == str[j]) {
      i++;
      j--;
    } else {
      console.log("Not Pal..");
      return;
    }
  }

  console.log("Palindromic");
}

PalindromicString("abcaba");
