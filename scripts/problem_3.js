var input;
input = 600851475143;	// temporary
var result = primeFactors(input);
alert("Result: " + result);

function primeFactors (number) {
	var primeFactorArray = [];
	var remaining = number;
	var mainLimit = Math.floor(Math.sqrt(number));
	for (var n=3; n < mainLimit; n++) {
		var isPrime = true;
		var primeLimit = Math.floor(Math.sqrt(n));
		for (var i=2; i<primeLimit; i++) {
			if (n%i === 0) {
				isPrime = false;
			}
		}
		if (isPrime && (number%n === 0)) {
			primeFactorArray.push(n);
			remaining = remaining / n;
			if (remaining === 1) {
				break;
			}
		}
	}
	console.log(primeFactorArray);
	var lastIndex = primeFactorArray.length - 1;
	var largestPrimeFactor = primeFactorArray[lastIndex];
	return largestPrimeFactor;
}