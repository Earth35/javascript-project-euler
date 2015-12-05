var input;
input = 4000000;	// temporary
var result = evenFibonacciNumbers(input);
alert("Result: " + result);

function evenFibonacciNumbers (limit) {
	var prevNum1 = 1;
	var prevNum2 = 2;
	var sum = 2;
	var current = prevNum1 + prevNum2;
	console
	while (current <= input) {
		if (current%2 === 0) {
			sum += current;
		}
		prevNum1 = prevNum2;
		prevNum2 = current;
		current = prevNum1 + prevNum2;
	}
	return sum;
}