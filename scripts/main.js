function sumOfMultiples () {
	var number = parseInt(document.getElementById("problem1_input").value);
	var totalSum = 0;
	for (var i=3; i<number; i++) {
		if (i%3 === 0) {
			totalSum += i;
		}
		else if (i%5 === 0) {
			totalSum += i;
		}
	}
	document.getElementById('res1').innerHTML = "Result: " + totalSum;
}

function evenFibonacciNumbers () {
	var limit = parseInt(document.getElementById("problem2_input").value);
	var prevNum1 = 1;
	var prevNum2 = 2;
	var sum = 2;
	var current = prevNum1 + prevNum2;
	while (current <= limit) {
		if (current%2 === 0) {
			sum += current;
		}
		prevNum1 = prevNum2;
		prevNum2 = current;
		current = prevNum1 + prevNum2;
	}
	document.getElementById('res2').innerHTML = "Result: " + sum;
}

function primeFactors () {
	var number = parseInt(document.getElementById("problem3_input").value);
	var primeFactorArray = [];
	var remaining = number;
	if (number < 25) {
		for (var n=3; n <= number; n++) {
			var isPrime = true;
			var primeLimit = Math.floor(Math.sqrt(n));
			for (var i=2; i<=primeLimit; i++) {
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
	}
	else {
		var mainLimit = Math.floor(Math.sqrt(number));
		for (var n=3; n <= mainLimit; n++) {
			var isPrime = true;
			var primeLimit = Math.floor(Math.sqrt(n));
			for (var i=2; i<=primeLimit; i++) {
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
	}
	var lastIndex = primeFactorArray.length - 1;
	var largestPrimeFactor = primeFactorArray[lastIndex];
	document.getElementById('res3').innerHTML = "Result: " + largestPrimeFactor;
}

function submitOnEnter (arg) {
	var initialArg = arg;
	var targetId;
	switch(initialArg) {
		case "problem3":
			targetId = "problem3_submit";
			break;
		case "problem2":
			targetId = "problem2_submit";
			break;
		case "problem1":
			targetId = "problem1_submit";
			break;
	}	
	if (event.keyCode == 13) document.getElementById(targetId).click()
}
