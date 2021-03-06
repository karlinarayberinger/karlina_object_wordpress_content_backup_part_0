/**
 * file: bubble_sort.js
 * type: JavaScript
 * author: karbytes
 * date: 27_JANUARY_2021
 * license: PUBLIC_DOMAIN
 */

/**
 * Use the native JavaScript Math.random() function to produce a random number.
 * @return {Number} a decimal number no smaller than 0 and smaller than 1.
 */
function generate_random_number() {
	return Math.random();
}

/**
 * Use the native JavaScript Number.parseFloat() function to determine whether or not value represents the NaN state.
 * Note: NaN (i.e. Not_a_Number) is classified as a JavaScript Number type value even though it does not represent a definite quantity.
 * @param {Number} value is assumed to be a decimal number.
 * @return {Number} value if value is a finite number; 0.0 if value is Not_a_Number.
 */
function get_floating_point_number(value) {
	value = Number.parseFloat(value);
	return (isNaN(value)) ? 0.0 : value;
}

/**
 * Determine whether or not input represents exactly one whole number which is zero or larger.
 * @param {Number} input is assumed to be a nonnegative decimal whole number.
 * @return {Boolean} true if input represents exactly one nonnegative integer; false otherwise.
 */
function validate_nonnegative_integer(input) {
	try {
		if (arguments.length !== 1) throw "Exactly one function argument is required.";
		if (typeof arguments[0] !== "number") throw "A number type function argument is required.";
		if (arguments[0] < 0) throw "A nonnegative number is required as the function input.";
		if (Math.floor(arguments[0]) !== arguments[0]) throw "A whole number is required as the function input.";
		return true;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of validate_nonnegative_integer(input): " + e);
		return false;
	}
}

/**
 * Produce a random nonnegative integer which is no larger than some nonnegative integer limit (10 by default).
 * @param {Number} maximum_output_value is assumed to be a nonnegative decimal whole number.
 * @return {Number} a decimal whole number no smaller than 0 and no larger than maximum_output_value.
 */
function generate_random_nonnegative_integer(maximum_output_value) {
	try {
		maximum_output_value = (!validate_nonnegative_integer(maximum_output_value)) ? 10 : maximum_output_value;
		return Math.floor((maximum_output_value + 1) * generate_random_number());
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of generate_random_nonnegative_integer(maximum_output_value): " + e);
	}
}

/**
 * Produce an array of random nonnegative integers such that the default array length is 10 elements.
 * @param {Number} maximum_output_value is assumed to be a nonnegative decimal whole number.
 * @param {Number} number_of_array_elements is assumed to be a natural number (in base-ten).
 * @return {Object} a nonempty array whose elements are each some decimal whole number no smaller than 0 and no larger than maximum_output_value.
 */
function generate_array_of_random_nonnegative_integers(maximum_output_value, number_of_array_elements) {
	let array = [], incrementor = 0;
	try {
		if (arguments.length !== 2) throw "Exactly two function arguments are required.";
		maximum_output_value = (!validate_nonnegative_integer(maximum_output_value)) ? 10 : maximum_output_value;
		number_of_array_elements = (!validate_nonnegative_integer(number_of_array_elements) || (number_of_array_elements < 1)) ? 10 : number_of_array_elements;
		for (incrementor = 0; incrementor < number_of_array_elements; incrementor++) array.push(generate_random_nonnegative_integer(maximum_output_value));
		return array;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of generate_random_nonnegative_integer(maximum_output_value): " + e);
	}
}

/**
 * Retrieve the number of milliseconds which have elapsed since midnight on 01_JANUARY_1970 (i.e. the Unix Epoch).
 * @return {String} the number of milliseconds elapsed since the Unix Epoch followed by a text description.
 */
function generate_time_stamp() {
	return (Date.now() + " milliseconds elapsed since 00:00:00 on 01_JANUARY_1970 Universal Coordinated Time (UTC).");
}

/**
 * Populate the web page DIV element whose identifier (id) is "console" with a time stamped message.
 * Assume that this function is called when the web page, bubble_sort.html, is loaded by the web browser.
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
 * Print a time stamped message to the bottom of the content displayed inside of the web page DIV element whose identifier (id) is "console".
 * Set the content of the DIV element whose id is "output" to the following plain-text header: "BUBBLE SORT PROCESS RESULTS".
 * Assume that this function is called when the SORT button on the web page, bubble_sort.html, is clicked.
 */
function register_button_click() {
	let console_div_element = {}, output_div_element = {}, console_div_content = "", output_div_content = "", p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
	try {
		console_div_element = document.getElementById("console");
		console_div_content = (p0 + "The button was clicked at time: " + generate_time_stamp() + p1);
		console_div_element.innerHTML += console_div_content;
		output_div_element = document.getElementById("output");
		output_div_content = "BUBBLE SORT PROCESS RESULTS";
		output_div_element.innerHTML = output_div_content;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of register_button_click(): " + e);
	}
}

/**
 * Hide the two input text fields and the button from the web page interface.
 */
function hide_input_fields() {
	try {
		document.getElementById("maximum_output_value_field").style.display = "none";
		document.getElementById("number_of_array_elements_field").style.display = "none";
		document.getElementById("sort_button").style.display = "none";
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of hide_input_fields(): " + e);
	}
}

/**
 * Update the web page interface by displaying the input values for the bubble sort process.
 * @param {Number} maximum_output_value is assumed to be a nonnegative decimal integer.
 * @param {Number} number_of_array_elements is assumed to be a nonnegative decimal integer.
 */
function set_input_values_display(maximum_output_value, number_of_array_elements) {
	try {
		if (arguments.length !== 2) throw "Exactly two function arguments are required.";
		if (typeof arguments[0] !== "number") throw "maximum_output_value must be a number type argument.";
		if (typeof arguments[1] !== "number") throw "number_of_array_elements must be a number type argument.";
		document.getElementById("maximum_output_value_field_status_message").innerHTML = maximum_output_value;
		document.getElementById("number_of_array_elements_field_status_message").innerHTML = number_of_array_elements;
		document.getElementById("sort_button_status_message").innerHTML = "The button has been hidden in order to prevent overlapping function calls.";
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of set_input_values_display(maximum_output_value, number_of_array_elements): " + e);
	}
}

/**
 * Append a new paragraph to the bottom of the content inside the DIV element whose identifier (id) is "output" such that the paragraph displays the current state of the input array.
 * If the an adjacent pair of elements of the array have been sorted (presumably during an iteration of the bubble sort process), color that pair of elements yellow (instead of the default text color cyan).
 * @param {Object} linear_sequence is assumed to be a nonempty array whose elements are each nonnegative integers.
 * @param {Number} swapped_index_0 is assumed to be the index of the array element which was most recently swapped with its leftmost neighboring element; -1 if no swap occurred.
 * @param {Number} swapped_index_1 is assumed to be the index of the array element which was most recently swapped with its rightmost neighboring element; - 1 if no swap occurred.
 */
function print_array(linear_sequence, swapped_index_0, swapped_index_1) {
	let N = 0, i = 0, html_content = "", output_div = {};
	let p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
	let s00 = ('<' + 'span style="color:#00ffff;"' + '>'), s01 = ('<' + 'span style="color:#ffff00;"' + '>'), s10 = ('<' + '/' + 'span' + '>');
	try {
		if (arguments.length !== 3) throw "Exactly three function arguments are required.";
		if (typeof arguments[0] !== "object") throw "linear_sequence must be an object type argument.";
		if (typeof arguments[1] !== "number") throw "swapped_index_0 must be a number type argument.";
		if (typeof arguments[2] !== "number") throw "swapped_index_1 must be a number type argument.";
		if (!validate_nonnegative_integer(swapped_index_0) && (swapped_index_0 !== -1)) throw "swapped_index_0 must be a nonnegative integer or else -1.";
		if (!validate_nonnegative_integer(swapped_index_1) && (swapped_index_1 !== -1)) throw "swapped_index_1 must be a nonnegative integer or else -1.";
		if (typeof linear_sequence.length !== "number") throw "The length property of linear_sequence must be a number type datum.";
		N = linear_sequence.length;
		if (N < 1) throw "linear_sequence must be a nonempty array.";
		for (i = 0; i < N; i++) {
			if (!validate_nonnegative_integer(linear_sequence[i])) throw "Each element of the linear_sequence array must be a nonnegative integer.";
		}
		output_div = document.getElementById("output");
		html_content = p0;
		for (i = 0; i < N; i++) {
			if (i === 0) html_content += ('array := [ ');
			if ((i === swapped_index_0) || (i === swapped_index_1)) html_content += s01;
			else html_content += s00;
			html_content += linear_sequence[i];
			html_content += s10;
			if (i < (N - 1)) html_content += (', ');
			if (i === (N - 1)) html_content += (' ].');
		}
		html_content += p1;
		output_div.innerHTML += html_content;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of print_array(linear_sequence, swapped_index_0, swapped_index_1): " + e);	
	}
}

/**
 * Append a time stamped message to the bottom of the content displayed inside of the web page DIV element whose identifier (id) is "console".
 * Assume that this function is called when the sorting process (which is initiated when the SORT button is clicked) finishes.
 */
function register_end_of_process() {
	let console_div_element = {}, console_div_content = "", p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
	try {
		console_div_element = document.getElementById("console");
		console_div_content = (p0 + "The process completed at time: " + generate_time_stamp() + p1);
		console_div_element.innerHTML += console_div_content;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of register_button_click(): " + e);
	}
}

/**
 * Retrieve the value which is currently displayed in a particular text field on the associated web page, bubble_sort.html.
 * If that value is not a nonnegative integer, then the default value 10 will be returned instead.
 * @param {String} page_element_identifier is assumed to be the identifier (id) of an input text field.
 * @return {Number} the nonnegative integer value displayed inside the text field; 10 otherwise.
 */
function get_text_field_value(page_element_identifier) {
	let input_text_field = {}, input_text_field_value = 0, input_text_field_status_message_container = {}, input_text_field_status_message_string = "";
	try {
		input_text_field = document.getElementById(page_element_identifier);
		input_text_field_value = input_text_field.value;
		input_text_field_value = get_floating_point_number(input_text_field_value);
		return (validate_nonnegative_integer(input_text_field_value) && (input_text_field_value > 0)) ? input_text_field_value : 10;
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the runtime of get_text_field_value(page_element_identifier): " + e);
	}
}

/**
 * If the input values, array length and maximum array element value, are both valid inputs, then create an array of random nonnegative integers accordingly.
 * (If any one of the input values is invalid, then use a program default value instead to generate the random numbers array).
 * Print the initial state of the array inside of the DIV element whose identifier (id) is "output".
 * Each time a pair of adjacent array elements are swapped, print the current state of the array (as a new line at the bottom of whatever text content is currently displayed inside of the "output" DIV) while coloring the swapped elements yellow.
 * Print the total number of element swaps performed, the total number of iterative scans from the leftmost element to the rightmost element of the array, and the total number of seconds elapsed between the time at which the SORT button was clicked and the time at which the sorting algorithm finished.
 */
function sort() {
	let maximum_output_value = 0, number_of_array_elements = 0;
	let array = [], i = 0, element_placeholder = 0;
	let number_of_array_scans = 0, number_of_element_swaps = 0;
	let array_is_sorted = false, elements_were_swapped = false;
	let seconds_elapsed = 0, time_initial = 0, time_final = 0;
	let output_div_element = {}, output_div_content = "";
	let p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
	let s0 = ('<' + 'span style="color:#ffff00;"' + '>'), s1 = ('<' + '/' + 'span' + '>');
	try {
		time_initial = Date.now();
		register_button_click();
		hide_input_fields();
		maximum_output_value = get_text_field_value("maximum_output_value_field");
		number_of_array_elements = get_text_field_value("number_of_array_elements_field");
		set_input_values_display(maximum_output_value, number_of_array_elements);
		array = generate_array_of_random_nonnegative_integers(maximum_output_value, number_of_array_elements);
		output_div_element = document.getElementById("output");
		print_array(array, -1, -1);
		while (!array_is_sorted) {
			elements_were_swapped = false;
			for (i = 1; i < number_of_array_elements; i += 1) {
				if (array[i - 1] > array[i]) {
					element_placeholder = array[i - 1];
					array[i - 1] = array[i];
					array[i] = element_placeholder;
					elements_were_swapped = true;
					number_of_element_swaps += 1;
					print_array(array, (i - 1), i);
				}
			}
			number_of_array_scans += 1;
			if (!elements_were_swapped) array_is_sorted = true;
		}
		print_array(array, -1, -1);
		time_final = Date.now();
		seconds_elapsed = (time_final - time_initial) / 1000;
		output_div_content += (p0 + "Number of Array Elements: " + s0 + number_of_array_elements + s1 + '.' + p1);
		output_div_content += (p0 + "Maximum Element Value: " + s0 + maximum_output_value + '.' + s1 + p1);
		output_div_content += (p0 + "Number of Array Scans: " + s0 + number_of_array_scans + '.' + s1 + p1);
		output_div_content += (p0 + "Number of Element Swaps: " + s0 + number_of_element_swaps + s1 + '.' + p1);
		output_div_content += (p0 + "Seconds Elapsed: " + s0 + seconds_elapsed + s1 + '.' + p1);
		output_div_element.innerHTML += output_div_content;
		register_end_of_process();
	}
	catch(e) {
		console.log("An exception to normal functioning occurred during the sort(): " + e);
	}
}
