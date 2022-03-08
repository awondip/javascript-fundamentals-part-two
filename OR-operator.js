// The “OR” operator is represented with two vertical line symbols:

// result = a || b;
// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

// In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.
//Example

//There are four possible logical combinations:

console.log( true || true );  
console.log( false || true );  
console.log( true || false );  
console.log( false || false ); 

//In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.

//For instance:

console.log( 1 || 0 ); // 1 (1 is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)

console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)
