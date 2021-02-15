/**
 * file: golden_ratio.js
 * type: JavaScript
 * author: karbytes
 * date: 06_JANUARY_2021
 * license: PUBLIC_DOMAIN
 */

/**
 * Determine whether or not X represents exactly one Number type value and nonnegative decimal integer no larger than 1000.
 * @param {*} X - some nonnegative number of function inputs.
 * @return {Boolean} true if exactly one Number type value and nonnegative decimal integer no larger than 1000; false otherwise.
 */
function is_integer_in_range(X) {
	try {
		return ((arguments.length !== 1) || (typeof arguments[0] !== "number") || (Math.floor(X) !== X) || (X < 0) || (X > 1000)) ? false : true;
	}
	catch(e) {
		console.log("An error occurred during the runtime of is_integer_in_range(X): " + e);
	}
}

/**
 * Determine the Nth term of the Fibonacci Sequence.
 * The Fibonacci Sequence begins with the following numbers: 1,1,2,3,5,8,13,21.
 * Let N represent a decimal integer value.
 * Let fibonacci_term(N < 2) := 1.
 * Let fibonacci_term(N > 1) := fibonacci_term(N - 2) + fibonacci_term(N - 1).
 * @param {Number} N - a nonnegative integer no larger than 1000.
 * @return {Number} the Nth term of the Fibonacci Sequence.
 */
function fibonacci_term(N) {
	try {
		let i = 0, A = 1, B = 0, C = 0;
		N = is_integer_in_range(N) ? N : 0;
		while (i < N) {
			C = A;
			A = A + B;
			B = C;
			i += 1;
		}
		return A;
	}
	catch(e) {
		console.log("An error occurred during the runtime of fibonacci_term(N): " + e);
	}
}

/**
 * Generate an array which contains the first N terms of the Fibonacci Sequence such that the numbers are listed in ascending order starting at index 0 and ending at index N - 1.
 * The Fibonacci Sequence begins with the following numbers: 1,1,2,3,5,8,13,21.
 * Let N represent a decimal integer value.
 * Let fibonacci_term(N < 2) := 1.
 * Let fibonacci_term(N > 1) := fibonacci_term(N - 2) + fibonacci_term(N - 1).
 * @param {Number} N - a nonnegative integer no larger than 1000.
 * @return {Array} an array representing the first N terms of the Fibonacci Sequence.
 */
function fibonacci_sequence(N) {
	try {
		let i = 0, S = [];
		if (!is_integer_in_range(N)) throw "N must be a JavaScript Number type nonnegative decimal integer no larger than 1000.";
		for (i = 0; i < N; i++) S.push(fibonacci_term(i));
		return S;
	}
	catch(e) {
		console.log("An error occurred during the runtime of fibonacci_sequence(N): " + e);
	}
}

/**
 * Generate a list which contains the first N Golden Ratio approximations which use pairs of adjacent Fibonacci Sequence terms to divide the right-hand term by the left-hand term.
 * The Fibonacci Sequence begins with the following numbers: 1,1,2,3,5,8,13,21.
 * Let N represent a decimal integer value.
 * Let fibonacci_term(N < 2) := 1.
 * Let fibonacci_term(N > 1) := fibonacci_term(N - 2) + fibonacci_term(N - 1).
 * The Golden Ratio is an irrational number because it cannot be represented as a decimal fraction whose numerator is an integer and whose denominator is an integer other than zero.
 * The Golden Ratio is represented by the constant, PHI, and is exactly equal to (1 + square_root(5)) / 2.
 * @param {Number} N - a nonnegative integer no larger than 1000.
 * @return {String} an HTML formatted string of paragraph data such that each paragraph encapsulates a single Golden Ratio approximation.
 */
function golden_ratio_approximation(N) {
	try {
		let i = 0, S = [], G = "", right_fibonacci_term = 0, left_fibonacci_term = 0, golden_ratio_approximation = 0;
		if (!is_integer_in_range(N)) throw "N must be a JavaScript Number type nonnegative decimal integer no larger than 1000.";
		if (N < 2) N = 2;
		S = fibonacci_sequence(N);
		for (i = 1; i < N; i++) { 
			right_fibonacci_term = S[i];
			left_fibonacci_term = S[i - 1];
			golden_ratio_approximation = (right_fibonacci_term / left_fibonacci_term);
			G += ('<' + 'p' + '>');
			G += ('G[' + i + ']: ');
			G += ('(' + right_fibonacci_term + '/' + left_fibonacci_term + ') = ')
			G += (golden_ratio_approximation + '.');
			G += ('<' + '/' + 'p' + '>');
		}
		return G;
	}
	catch(e) {
		console.log("An error occurred during the runtime of golden_ratio_approximation(N): " + e);
	}
}

/**
 * Generate a plain-text time-stamped message which indicates the point in time at which the function test_0() is called.
 * @return {String} a message displaying the number of milliseconds elapsed since 01_JANUARY_1970 00:00:00 (Coordinated Universal Time (UTC)).
 */
function test_0() {
	try {
		const time_point = Date.now();
		let message = " milliseconds since 01_JANUARY_1970 00:00:00 (Coordinated Universal Time (UTC)).";
		message = time_point + message;
		return message;
	}
	catch(e) {
		console.log("An error occurred during the runtime of test_0(): " + e);
	}
}

/**
 * Initialize the content of the HTML "div" element whose identifier (id) is "console" by populating that element with a time-stamped message.
 * Assume that the test_1() function is called when the web page is opened or refreshed by the web browser.
 */
function test_1() {
	try {
		const message = "The web page was opened at time: " + test_0();
		document.getElementById("console").innerHTML = (('<' + 'p' + '>') + message + ('<' + '/' + 'p' + '>'));
	}
	catch(e) {
		console.log("An error occurred during the runtime of test_1(): " + e);
	}
}

/**
 * Append a time-stamped message to the content inside of the HTML "div" element whose identifier (id) is "console".
 * Generate the first 100 approximations of the irrational number, PHI, by dividing adjacent terms of the Fibonacci Sequence.
 * (PHI approximately equals the quotient produced by dividing a Fibonacci Sequence term by its predescesor).
 * Set the content of the HTML "div" element whose identifier (id) is "output" to a list of PHI approximations.
 * Assume that the test() function is called when a button on the web page is clicked.
 */
function test() {
	try {
		const message = "The button was clicked at time: " + test_0();
		const results = golden_ratio_approximation(100);
		document.getElementById("output").innerHTML = results;
		document.getElementById("console").innerHTML += (('<' + 'p' + '>') + message + ('<' + '/' + 'p' + '>'));
	}
	catch(e) {
		console.log("An error occurred during the runtime of test(): " + e);
	}
}
