/**
 * file: binary_to_decimal.js
 * type: JavaScript
 * author: karbytes
 * date: 23_FEBRUARY_2021
 * license: PUBLIC_DOMAIN
 */

/**
 * Generate a plain-text message which displays an integer number of 
 * milliseconds elapsed since midnight (00:00:00) of 01_JANUARY_1970 
 * (Coordinated Universal Time (UTC)).
 */
function time_stamp() {
	const time_scalar = Date.now();
	let message =  " milliseconds since 01_JANUARY_1970 00:00:00 (Coordinated Universal Time (UTC)).";
	message = time_scalar + message;
	return message;
}

/**
 * Populate the DIV element whose identifier (id) is "terminal_window"
 * with a time-stamped message which indicates the time at which the
 * web page application, binary_to_decimal.html, was most recently 
 * loaded by the web browser. 
 *
 * If an error occurs, display an exception handling message
 * in the web console terminal.
 */
function initialize_terminal_window() {
	try {
		let terminal_window, p0 = ('<' + 'p' + '>'), p1 = ('<' + '/' + 'p' + '>');
		terminal_window = document.getElementById("terminal_window");
		terminal_window.innerHTML = (p0 + "* * *" + p1);
		terminal_window.innerHTML += (p0 + "The web page application loaded at time: " + p1);
		terminal_window.innerHTML += (p0 + time_stamp() + p1);
		terminal_window.innerHTML += (p0 + "* * *" + p1);
	}
	catch(exception) {
		console.log("An exception to normal functioning occurred during the runtime of initialize_application().");
		console.log("Exception Handling Message: " + exception);
	}
}

function initialize_application() {
	initialize_terminal_window();
}