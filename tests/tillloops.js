/*
Q1
Armstrong Numbers in Range
*/
function isArmstrong(num) {
  let digits = num.toString().split("");
  let power = digits.length;
  let sum = digits.reduce((acc, d) => acc + Math.pow(d, power), 0);
  return sum == num;
}

for (let i = 1; i < 160; i++) {
  if (isArmstrong(i)) {
    console.log(i);
  }
}
1;
2;
3;
4;
5;
6;
7;
8;
9;
153;

/*
Q2
Check prime numbers
*/ {
  if (input <= 1) {
    console.log(input, "is not a prime number");
  }
  for (let i = 2; i * i < input; i++) {
    if (input % i == 0) {
      console.log(input, "is not a prime number");
      return;
    }
  }
  console.log(input, "is a prime number");
}

/*
Q3
Input:

5

Output:
1
21
321
4321
54321
  */
for (let i = 1; i <= n; i++) {
  let s = "";
  let j = i;
  while (j > 0) {
    s += j;
    j--;
  }
  console.log(s);
}

/*
Q4
Reverse Integer Digits
 */
let n = 12345;
let s = n.toString();
s.trim();
let b = "";
for (let i = s.length - 1; i >= 0; i--) {
  b += s[i];
}
console.log(Number(b));

//Method 2
// let n=12345;
let reversed = 0;
while (n > 0) {
  let digit = n % 10;
  reversed = reversed * 10 + digit;
  n = Math.floor(n / 10);
}
console.log(reversed);

/*
Q5
Which angled triangle
*/

function whichAngled(a, b, c) {
  // Sort sides so c is the largest
  let sides = [a, b, c].sort((x, y) => x - y);
  let [x, y, z] = sides;

  let lhs = x * x + y * y; // sum of squares of smaller sides
  let rhs = z * z;         // square of largest side

  switch (true) {
    case lhs === rhs:
      return "Right-angled triangle";
    case lhs > rhs:
      return "Acute-angled triangle";
    case lhs < rhs:
      return "Obtuse-angled triangle";
    default:
      return "Not a valid triangle";
  }
}

console.log(whichAngled(3, 4, 5));   // Right-angled triangle
console.log(whichAngled(2, 2, 3));   // Acute-angled triangle
console.log(whichAngled(2, 3, 4));   // Obtuse-angled triangle


/*
Q6
const likes = 10;
const shares = "3";
const comments = "2";
const engagementScore = likes + (shares * comments) / (" " - "") + ("5" + 1) - true;
console.log(engagementScore);

What is the value of engagementScore printed to the console?
*/
NaN


/*
Q7
let n = 3;
const res = n-- > 3 ? "A" : n++ >= 3 ? "B" : --n === 1 ? "C" : "D";
console.log(res, n);
*/
2