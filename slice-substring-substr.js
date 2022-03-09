//slice():
// This method selects the part of a string and returns the selected part as a new string. Start and end parameters are used to specify the extracted part.
// The first character starts with index 0.
// Syntax:

//str.slice(start, end)
let text = "My name is Dylane"
console.log(text.slice (3,10) )

//substring():
//This function have the same syntax as of slice()
//This method selects the part of a string and returns the selected part as a new string. Start and end parameters are used to specify the extracted part.
 console.log(text.substring(-3 ,10))


 //substr() is similar to slice().

//The difference is that the second parameter specifies the length of the extracted part.
console.log(text.substr(3,7))
