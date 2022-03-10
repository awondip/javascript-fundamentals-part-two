// switch is a type of conditional statement that will evaluate an expression against multiple possible cases and execute one or more blocks of code based on matching cases.
//It will always be written with switch () {}, with parentheses containing the expression to test, and curly brackets containing the potential code to execute.

//Below is an example of a switch statement with two case statements, and a fallback known as default.

//switch (expression) {
	//case x:
		// execute case x code block
		//break;
	//case y:
		// execute case y code block
		//break;
	//default:
		// execute default code block
//}


// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
const day = new Date(10).getDay();

switch (day) {
	case 0:
		console.log("It's Sunday, time to relax!");
	
	case 1:
		console.log("Happy Monday!");
		
	case 2:
		console.log("It's Tuesday. You got this!");
	
	case 3:
		console.log("Hump day already!");
		
	case 4:
		console.log("Just one more day 'til the weekend!");
	
	case 5:
		console.log("Happy Friday!");
	
	case 6:
		console.log("Have a wonderful Saturday!");
	
	default:
		console.log("Something went horribly wrong...");
}

