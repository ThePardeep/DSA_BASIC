function reverseNumber(num) {
  let a = num; // 525
  let rev = 0;
  let rem = 0;
  while (num != 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  console.log(rev);
  if (rev == a) {
    console.log("Palindrome");
  } else {
    console.log("Not Palindrome");
  }
}

// rev = 525
// a = 525

// File System
// Web Server
//

reverseNumber(45);
