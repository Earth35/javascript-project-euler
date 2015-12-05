var input;
input = 1000;	// temporary
var result = sumOfMultiples(input);
alert("Result: " + result);

function sumOfMultiples (number) {
	var totalSum = 0;
	for (var i=3; i<number; i++) {
		console.log(i);
		if (i%3 === 0) {
			totalSum += i;
		}
		else if (i%5 === 0) {
			totalSum += i;
		}
	}
	return totalSum;
}