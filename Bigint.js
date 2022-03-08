// BigInt is a special numeric type that provides support for integers of arbitrary length.

// A bigint is created by appending n to the end of an integer literal or by calling the function BigInt that creates bigints from strings, numbers etc.
//example
const bigint = 1234567890123456789012345678901234567890n;
//math operators
alert(1n + 2n); 

alert(5n / 2n); 
 //note : We can’t mix bigints and regular numbers:
 alert(1n + 2);
 //We should explicitly convert them if needed: using either BigInt() or Number(), like this:
 