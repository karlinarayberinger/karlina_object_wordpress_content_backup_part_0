/**
 * file: fibonacci_numbers.js
 * type: JavaScript
 * author: karbytes
 * date: 04_JANUARY_2021
 * license: PUBLIC_DOMAIN
 */

function is_exactly_one_function_argument(X) {
	try {
		return (arguments.length === 1) ? true : false;
	}
	catch(e) {
		console.log("An error occurred during the runtime of is_exactly_one_function_argument(X): " + e);
	}
}

function is_exactly_one_number_type_value(X) {
	try {
		return (is_exactly_one_function_argument(X) && ((typeof X) === "number")) ? true : false;
	}
	catch(e) {
		console.log("An error occurred during the runtime of is_exactly_one_number_type_value(X): " + e);
	}
}

function is_exactly_one_integer_value(X) {
	try {
		return (is_exactly_one_number_type_value(X) && (Math.floor(X) === X)) ? true : false;
	}
	catch(e) {
		console.log("An error occurred during the runtime of is_exactly_one_integer_value(X): " + e);
	}
}

function is_exactly_one_nonnegative_integer_value(X) {
	try {
		return (is_exactly_one_integer_value(X) && (X > - 1)) ? true : false;
	}
	catch(e) {
		console.log("An error occurred during the runtime of is_exactly_one_nonnegative_integer_value(X): " + e);
	}
}

function get_fibonacci_number(N) {
	try {
		N = (is_exactly_one_nonnegative_integer_value(N)) ? N : 0;
		if (N < 2) return 1;
		return (get_fibonacci_number(N - 2) + get_fibonacci_number(N - 1));
	}
	catch(e) {
		console.log("An error occurred during the runtime of get_fibonacci_number(N): " + e);
	}
}

function get_first_N_fibonacci_sequence_terms(N) {
	try {
		let i = 0, S = [];
		while (i < N) {
			S.push(get_fibonacci_number(i));
			i += 1;
		}
		return S;
	}
	catch(e) {
		console.log("An error occurred during the runtime of get_first_N_fibonacci_sequence_terms(N): " + e);
	}
}

function test() {
	try {
		document.getElementById("output").innerHTML = get_first_N_fibonacci_sequence_terms(10);
	}
	catch(e) {
		console.log("An error occurred during the runtime of test(): " + e);
	}
}
