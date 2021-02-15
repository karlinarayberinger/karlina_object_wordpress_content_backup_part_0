/**
 * file: decimal_to_binary.js
 * type: JavaScript
 * author: karbytes
 * date: 02_FEBRUARY_2021
 * license: PUBLIC_DOMAIN
 */

 /**
 * Retrieve the number of milliseconds which have elapsed since midnight on 01_JANUARY_1970 (i.e. the Unix Epoch).
 * @return {String} the number of milliseconds elapsed since the Unix Epoch followed by a text description.
 */
function generate_time_stamp() {
	return (Date.now() + " milliseconds elapsed since 00:00:00 on 01_JANUARY_1970 Universal Coordinated Time (UTC).");
}

/**
 * Signify that the web page has been opened (and that this JavaScript file and the HTML web page are in communication with each other).
 * Populate the web page DIV element whose identifier (id) is "console" with a time stamped message.
 * Assume that there exists a div element on the web page, decimal_to_binary.html, whose identifier (id) is "console".
 * Assume that this function is called when the web page, decimal_to_binary.html, is loaded by the web browser.
 */
function load_web_page() {
	let console_div_element = {}, console_div_content = "", p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
	try {
		console_div_element = document.getElementById("console");
		console_div_content = (p0 + "The web page was opened at time: " + generate_time_stamp() + p1);
		console_div_element.innerHTML = console_div_content;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of load_web_page(): " + e);
	}
}

/**
 * Signify that the decimal-to-binary conversion process has started.
 * Append a time stamped message to the bottom of the text displayed inside of the web page DIV element whose identifier (id) is "console".
 * Assume that there exists a div element on the web page, decimal_to_binary.html, whose identifier (id) is "console".
 * Assume that this funciton is called when the button on the web page, decimal_to_binary.html, is clicked by the web application user.
 */
function record_button_click() {
	let console_div_element = {}, console_div_content = "", p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
	try {
		console_div_element = document.getElementById("console");
		console_div_content = (p0 + "The button was clicked at time: " + generate_time_stamp() + p1);
		console_div_element.innerHTML += console_div_content;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of record_button_click(): " + e);
	}
}

/**
 * Get the value which is currently displayed inside of the text field whose identifier (id) is "decimal_input_field".
 * Assume that there exists a text field input element on the web page, decimal_to_binary.html, whose identifier (id) is "decimal_input_field".
 * Assume that is function is called when the button on the web page, decimal_to_binary.html, is clicked.
 * @return {Number} a nonnegative decimal integer no larger than 255 (and 0 if a runtime error occurs).
 */
function extract_nonnegative_decimal_integer_value_from_text_field() {
	let text_field_input_element = {}, text_field_input_value = 0, decimal_digits = "0123456789", i = 0, k = 0, N = 0, s = '', is_valid_input_digit = false;
	try {
		text_field_input_element = document.getElementById("decimal_input_field");
		text_field_input_value = text_field_input_element.value;
		N = text_field_input_value.length;
		if (N === 0) throw "The text field appears to be missing required content.";
		if (N > 3) throw "A maximum of 3 decimal digits are accepcted as text field input.";
		while (i < N) {
			s = text_field_input_value[i];
			is_valid_input_digit = false;
			k = 0;
			while (k < 10) {
				if (s === decimal_digits[k]) is_valid_input_digit = true;
				k += 1;
			}
			if (!is_valid_input_digit) throw "Only decimal digits are accepted as valid text field input.";
			i += 1;
		}
		text_field_input_value =  Number.parseInt(text_field_input_value, 10); // The second field is the number base: decimal.
		if (text_field_input_value > 255) throw "The input value must be a nonnegative decimal integer less than 256.";
		return text_field_input_value;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of extract_nonnegative_decimal_integer_value_from_text_field(): " + e);
		return 0;
	}
}

/**
 * Hide the interactive elements on the web page user interface in order to prevent multiple input submissions from happening too frequently to process.
 * Assume that there exists a text field input element on the web page, decimal_to_binary.html, whose identifier (id) is "decimal_input_field".
 * Assume that there exists a button input element on the web page, decimal_to_binary.html, whose identifier (id) is "decimal_to_binary_button".
 * Assume that is function is called when the button on the web page, decimal_to_binary.html, is clicked.
 */
function hide_input_fields() {
	let text_field_input_element = {}, decimal_to_binary_button = {};
	try {
		text_field_input_element = document.getElementById("decimal_input_field");
		decimal_to_binary_button = document.getElementById("decimal_to_binary_button");
		text_field_input_element.style.display = "none";
		decimal_to_binary_button.style.display = "none";
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of hide_input_fields(): " + e);
	}
}

/**
 * Display a comment in yellow text (as specified by basic_stylesheet.css) in place of the interactive elements on the web page user interface, decimal_to_binary.html.
 * Assume that there exists a span text element on the web page, decimal_to_binary.html, whose identifier (id) is "decimal_input_display".
 * Assume that there exists a span text element on the web page, decimal_to_binary.html, whose identifier (id) is "hidden_button_explanation_display".
 * Assume that is function is called when the button on the web page, decimal_to_binary.html, is clicked.
 */
function annotate_hidden_input_fields() {
	let span_text_element_0 = {}, span_text_element_1 = {};
	try {
		span_text_element_0 = document.getElementById("decimal_input_display");
		span_text_element_1 = document.getElementById("hidden_button_explanation_display");
		span_text_element_0.innerHTML = "Input Value: " + extract_nonnegative_decimal_integer_value_from_text_field();
		span_text_element_1.innerHTML = "The button has been hidden in order to prevent overlapping function calls.";
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of annotate_hidden_input_fields(): " + e);
	}
}

/**
 * Signify that the end of the decimal-to-binary conversion process has been completed.
 * Append a time stamped message to the bottom of the text displayed inside of the web page DIV element whose identifier (id) is "console".
 * Assume that there exists a div element on the web page, decimal_to_binary.html, whose identifier (id) is "console".
 * Assume that this funciton is called when the button on the web page, decimal_to_binary.html, is clicked by the web application user.
 */
function record_process_completion() {
	let console_div_element = {}, console_div_content = "", p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
	try {
		console_div_element = document.getElementById("console");
		console_div_content = (p0 + "The process completed at time: " + generate_time_stamp() + p1);
		console_div_element.innerHTML += console_div_content;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of record_process_completion(): " + e);
	}
}

/**
 * Convert a base-ten nonnegative integer to its uniquely corresponding 8-digit sequence of binary digits.
 * INPUT: Get the value which is currently displayed inside of the text field whose identifier (id) is "decimal_input_field".
 * OUTPUT: Populate the web page DIV element whose identifier (id) is "output" with information about the base conversion (particularly the algebraic steps).
 * Assume that there exists a text field input element on the web page, decimal_to_binary.html, whose identifier (id) is "decimal_input_field".
 * Assume that there exists a button input element on the web page, decimal_to_binary.html, whose identifier (id) is "decimal_to_binary_button".
 * Assume that there exists a span text element on the web page, decimal_to_binary.html, whose identifier (id) is "decimal_input_display".
 * Assume that there exists a span text element on the web page, decimal_to_binary.html, whose identifier (id) is "hidden_button_explanation_display".
 * Assume that there exists a div element on the web page, decimal_to_binary.html, whose identifier (id) is "output".
 * Assume that there exists a div element on the web page, decimal_to_binary.html, whose identifier (id) is "console".
 * Assume that is function is called when the button on the web page, decimal_to_binary.html, is clicked.
 */
function decimal_to_binary() {
	let output_div_element = {}, p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
	let D = 0, D_saved = 0, B = "", S = "", T = "", i = 0, N = 0, significant_binary_digits = "", binary_digit = 0;
	try {
		record_button_click();
		hide_input_fields();
		annotate_hidden_input_fields();
		output_div_element = document.getElementById("output");
		D = extract_nonnegative_decimal_integer_value_from_text_field();
		D_saved = D;
		T = p0 + "INPUT: " + D + " (base-ten)." + p1;
		S = p0 + "PROCESS:" + p1;
		while(D > 0) {
			binary_digit = D % 2; // D mod 2 := 1 if D is odd and 0 if D is even.
			S += p0 + "(" + D + " mod 2) := " + binary_digit + "." + p1;
			significant_binary_digits += binary_digit;
			D = Number.parseInt((D / 2), 10); // The second field is the number base: decimal.
		}
		N = 8 - significant_binary_digits.length; // Significant digits exclude leading zeros in the final output sequence.
		while(i < N) {
			B += '0'; // Append a leading zero such that the final output sequence is exactly 8 binary digits in length.
			i += 1;
		}
		i = significant_binary_digits.length - 1;
		while(i > -1) { // Ensure that the significant binary digits are in the correct order (i.e. the reverse order in which they were obtained).
			B += significant_binary_digits[i];
			i -= 1;
		}
		i = 0;
		S += p0 + D_saved + " := ";
		while(i < 8) { // Show the algebraic formula for converting the binary output back to the decimal input.
			S += "[" + B[i] + " x (2 ^ " + (7 - i) + ")]";
			if (i < 7) S += " + ";
			i += 1;
		}
		S += "." + p1;
		i = 0;
		S += p0 + D_saved + " := ";
		while(i < 8) { // Show the algebraic formula for converting the binary output back to the decimal input.
			S += "[" + (Number.parseInt(B[i], 10) * Math.pow(2,(7 - i)))+ "]";
			if (i < 7) S += " + ";
			i += 1;
		}
		S += "." + p1;
		T += p0 + "OUTPUT: " + B + " (base-two)." + p1;
		T += S;
		output_div_element.innerHTML = T;
		record_process_completion();
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of decimal_to_binary(): " + e);
	}
}
