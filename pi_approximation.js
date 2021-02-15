/**
 * file: pi_approximation.js
 * type: JavaScript
 * author: karbytes
 * date: 19_JANUARY_2021
 * license: PUBLIC_DOMAIN
 */

/**
 * Get the number of milliseconds which have elapsed since 
 * the calling of the function, get_time_stamp(), and the 
 * Unix Epoch (i.e. midnight of 01_JANUARY_1970).
 *
 * @return {Number} a decimal integer comprised of digits which 
 *                  are arranged in exactly one ascending order
 *                  as follows: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.
 */
function get_time_stamp() {
	return Date.now();
}

/**
 * Get the number of milliseconds which have elapsed since the calling 
 * of the function, get_time_stamp(), and the Unix Epoch (i.e. midnight 
 * of 01_JANUARY_1970). Append that integer value to the following 
 * plain-text character sequence: " milliseconds since 01_JANUARY_1970 
 * 00:00:00 (Coordinated Universal Time (UTC))."
 *
 * @return {String} an integer number of milliseconds which
 *                  have elapsed since the Unix Epoch followed
 *                  by a plain-text description of the units
 *                  of time elapsed since the Unix Epoch and the
 *                  singular reference point (in chronological time).
 */
function get_time_stamped_message() {
	return (get_time_stamp() + " milliseconds since 01_JANUARY_1970 00:00:00 (Coordinated Universal Time (UTC)).");
}

/**
 * Determine whether or not a canvas element whose id is "square_canvas" 
 * has side lengths which are each 200 pixels.
 *
 * @return {Boolean} true if and only if there exists a canvas element 
 *                   whose id is "square_canvas" and whose side lengths 
 *                   are each 200 pixels; 
 *                   false otherwise.
 */
function validate_square_canvas_dimensions() {
	try {
		let canvas, width, height;
		canvas = document.getElementById("square_canvas");
		width = canvas.offsetWidth;
		height = canvas.offsetHeight;
		return ((width === height) && (width === 200)) ? true : false;
	}
	catch(e) {
		console.log("An error occurred during the execution of the function validate_square_canvas_dimensions(): " + e);
		return false;
	}
}

/**
 * Draw an orange horizontal line through the middle of the canvas 
 * whose id is "square_canvas" if and only if the side lengths 
 * of the canvas are each 200 pixels.
 */
function draw_horizontal_axis_through_center_of_square_canvas() {
	try {
		let canvas, context, canvas_length, quadrant_length;
		if (!validate_square_canvas_dimensions()) {
			throw "validate_square_canvas_dimensions() returned false.";
		}
		canvas = document.getElementById("square_canvas");
		canvas_length = canvas.offsetWidth;
		quadrant_length = Math.floor(canvas_length / 2);
		context = canvas.getContext("2d");
		context.strokeStyle = "#ff9000";
		context.beginPath();
		context.moveTo(0, quadrant_length);
		context.lineTo(canvas_length, quadrant_length);
		context.stroke();
	}
	catch(e) {
		console.log("An error occurred during the execution of the function draw_horizontal_axis_through_center_of_square_canvas(): " + e);
	}
}

/**
 * Draw an orange vertical line through the middle of the canvas 
 * whose id is "square_canvas" if and only if the side lengths 
 * of the canvas are each 200 pixels. 
 */
function draw_vertical_axis_through_center_of_square_canvas() {
	try {
		let canvas, context, canvas_length, quadrant_length;
		if (!validate_square_canvas_dimensions()) {
			throw "validate_square_canvas_dimensions() returned false.";
		}
		canvas = document.getElementById("square_canvas");
		canvas_length = canvas.offsetWidth;
		quadrant_length = Math.floor(canvas_length / 2);
		context = canvas.getContext("2d");
		context.strokeStyle = "#ff9000";
		context.beginPath();
		context.moveTo(quadrant_length, 0);
		context.lineTo(quadrant_length, canvas_length);
		context.stroke();
	}
	catch(e) {
		console.log("An error occurred during the execution of the function draw_vertical_axis_through_center_of_square_canvas(): " + e);
	}
}

/**
 * Display a time-stamped paragraph message which shows the time at which the 
 * web page was opened (using the Unix Epoch as a "time 0" point of reference)
 * inside of a web page element whose identifier is "console".
 * 
 * For each of the span elements whose identifiers are "seconds_remaining_display", 
 * "magenta_dot_count_display", "green_dot_count_display", and "pi_approximation_display", 
 * set the internal text content to the symbol '0' 
 * (to represent statistical variables in their initial state).
 *
 * Draw a 1-pixel horizontal axis line segment and a 1-pixel vertical axis line segment
 * inside of the square canvas such that each of the four quadrants created by the 
 * horizontal and vertical line segments have the same two-dimensional area, side lengths,
 * and angle measurements (90 per internal angle).
 */
function load_page() {
	try {
		let message = ("The web page was loaded at time: " + get_time_stamped_message());
		document.getElementById("console").innerHTML = (('<' + 'p' + '>') + message + ('<' + '/' + 'p' + '>'));
		document.getElementById("seconds_remaining_display").innerHTML = '0';
		document.getElementById("magenta_dot_count_display").innerHTML = '0';
		document.getElementById("green_dot_count_display").innerHTML = '0';
		document.getElementById("pi_approximation_display").innerHTML = '0';
		draw_horizontal_axis_through_center_of_square_canvas();
		draw_vertical_axis_through_center_of_square_canvas();
	}
	catch(e) {
		console.log("An error occurred during the execution of the function load_page(): " + e);
	}
}

/**
 * Determine whether or not a given input represents exactly one nonnegative integer.
 *
 * @param {*} input can be zero, one, or multiple arguments.
 *
 * @return {Boolean} true if and only if input represents exactly one nonnegative integer; 
 *                   false for any other case.
 */
function is_nonnegative_integer(input) {
	try {
		if (arguments.length !== 1) throw "Exactly one function argument is required.";
		if (typeof arguments[0] !== "number") throw "input must be a Number type value.";
		if (Math.floor(input) !== input) throw "input must be an integer value.";
		if (input < 0) throw "input must not be smaller than 0.";
		return true;
	}
	catch(e) {
		console.log("An error occurred during the execution of the function is_nonnegative_integer(input): " + e);
		return false;
	}
}

/**
 * Use iteration to compute the approximate square root of a nonnegative integer.
 *
 * @param {Number} nonnegative_integer is a whole number no smaller than 0.
 *
 * @return {Number} the approximate square root of nonnegative_integer; 
 *                  0 if an error occurs.
 */
function compute_approximate_square_root(nonnegative_integer) {
	try {
		let n = is_nonnegative_integer(nonnegative_integer) ? nonnegative_integer : 0;
		let x = n;
		let y = 1;
		let e = 0.000001; // e is an arbitrary positive number which controls precision.
		while ((x - y) > e) {
			x = (x + y) / 2;
			y = n / x;
		}
		return x;
	}
	catch(e) {
		console.log("An error occurred during the execution of the function compute_approximate_square_root(nonnegative_integer): " + e);
	}
}

/**
 * Compute the second power of some input number.
 *
 * @return {Number} number multiplied once by itself; 
 *                  0 if an error is thrown.
 */
function compute_square(number) {
	try {
		if (arguments.length !== 1) throw "Exactly one function argument is required.";
		if (typeof arguments[0] !== "number") throw "A Number type data value is required.";
		return (number * number);
	}
	catch(e) {
		console.log("An error occurred during the execution of the function compute_square(number): " + e);
		return 0;
	}
}

/**
 * Determine whether or not some input represents a valid planar point.
 *
 * @param {Object} input is an object containing exactly two key-value pairs 
 *                 (X : Number, Y : Number).
 *
 * @return {Boolean} true if and only if input represents a valid coordinate pair; 
 *                   false otherwise.
 */
function is_valid_two_dimensional_point(input) {
	try {
		if (arguments.length !== 1) throw "Exactly one function argument is required.";
		if (typeof arguments[0] !== "object") throw "An Object type data value is required.";
		if (typeof input.X !== "number") throw "The X attribute of the input Object must be a Number type value.";
		if (typeof input.Y !== "number") throw "The Y attribute of the input Object must be a Number type value.";
		return true;
	}
	catch(e) {
		console.log("An error occurred during the execution of the function initialize_web_page(): " + e);
		return false;
	}
}

/**
 * Use the Distance Formula to compute the length of the line 
 * where point_A and point_B are its endpoints.
 *
 * @param {Object} point_A is assumed to be a list of 
 *                 two key-value pairs (X : Number, Y : Number).
 *
 * @param {Object} point_B is assumed to be a list of 
 *                 two key-value pairs (X : Number, Y : Number).
 *
 * @return {Number} a nonnegative number representing the length 
 *                  of the shortest path between point_A and point_B 
 *                  on a two-dimensional Cartesian plane
 *                  (which consists of nonoverlapping square units 
 *                   whose frame of reference are a horizontal
 *                   x-axis and a vertical y-axis such that the 
 *                   x-axis and y-axis intersect at a perpendicular
 *                   angle at the origin point of the grid: ( X : 0, Y : 0)).
 */
function compute_distance_between_two_planar_points(point_A, point_B) {
	try {
		let X_length = 0, Y_length = 0;
		if (!is_valid_two_dimensional_point(point_A)) throw "is_valid_two_dimensional_point(point_A) returned false";
		if (!is_valid_two_dimensional_point(point_B)) throw "is_valid_two_dimensional_point(point_B) returned false";
		X_length = compute_square(point_A.X - point_B.X);
		Y_length = compute_square(point_A.Y - point_B.Y);
		return compute_approximate_square_root(X_length + Y_length);
	}
	catch(e) {
		console.log("An error occurred during the execution of the function compute_distance_between_two_planar_points(point_A, point_B): " + e);
	}
}

/**
 * Generate a random integer no smaller than minimum_integer 
 * and no larger than maximum_integer.
 *
 * @param {Number} minimum_integer is assumed to be a whole 
 *                 number no larger than maximum_integer.
 *
 * @param {Number} maximum_integer is assumed to be a whole 
 *                 number no smaller than minimum_integer.
 *
 * @return {Number} a randomly selected integer from the 
 *                  set [minimum_integer, maximum_integer].
 */
function generate_random_integer_in_range_endpoints_inclusive(minimum_integer, maximum_integer) {
	try {
		if (arguments.length !== 2) {
			throw "Exactly two function arguments are required.";
		}
		if ((typeof arguments[0] !== "number") || (typeof arguments[1] !== "number")) {
			throw "Each function argument must be a Number type data value.";
		}
		if ((Math.floor(minimum_integer) !== minimum_integer) || (Math.floor(maximum_integer) !== maximum_integer)) {
			throw "Each function argument must be an integer value.";
		}
		if (minimum_integer > maximum_integer) {
			throw "minimum_integer must not be larger than maximum_integer.";
		}
		return Math.floor(Math.random() * (maximum_integer - minimum_integer + 1) + minimum_integer);
	}
	catch(e) {
		console.log("An error occurred during the execution of the function generate_random_integer_in_range_endpoints_inclusive(minimum_integer, maximum_integer): " + e);
		return 0;
	}
}

/**
 * Generate the X-value and Y-value or a random coordinate pair 
 * for a point to plot within a square canvas.
 *
 * @return {Object} a two-dimensional point represented as 
 *                  a list of two key-value pairs 
 *                  (X : Number, Y : Number).
 */
function generate_random_two_dimensional_coordinate_pair() {
 	try {
 		let canvas, context, canvas_length, x_value, y_value;
 		if (!validate_square_canvas_dimensions()) {
			throw "validate_square_canvas_dimensions() returned false.";
		}
 		canvas = document.getElementById("square_canvas");
 		canvas_length = canvas.offsetWidth;
 		x_value = generate_random_integer_in_range_endpoints_inclusive(0, canvas_length);
 		y_value = generate_random_integer_in_range_endpoints_inclusive(0, canvas_length);
 		return { X : x_value, Y : y_value };
 	}
 	catch(error) { 
 		console.log("An error occurred during the execution of the function generate_random_two_dimensional_coordinate_pair(): " + error);
 	}
 }


/**
 * Play exactly one sound file exactly one time 
 * (i.e. for a finite duration of time there will 
 * be a sequence of auditory phenomena).
 *
 * Assume that the sound file, alert_sound_effect.wav, 
 * exists in the same file directory as this JavaScript file
 * and the web page deploying this JavaScript file and the
 * referenced audio file.
 */
function play_sound_file() {
	try {
		var audio = new Audio("alert_sound_effect.wav");
		audio.play();
	}
	catch(e) {
		console.log("An error occurred during the execution of the function play_sound_file(): " + e);
	}
}

/**
 * Assume that this function is called after the 
 * plot_random_pixel_on_square_canvas(simulation)
 * function is called 1800 times (and once per second).
 *
 * 30 (minutes) * 60 (seconds/minutes) = 1800 seconds.
 *
 * Print a time-stamped status message (to the web page 
 * element whose identifier is "console") which indicates 
 * that the timer session of 1800 seconds is finished.
 *
 * Unhide the button which starts the Monte Carlo Simulation
 * timer (which runs for 1800 seconds each time the button 
 * is clicked).
 * 
 * Attempt to play a sound which signifies that the timer
 * session has completed.
 */
function finish_simulation() {
	try {
		let message = ("The Monte Carlo Simulation completed at time: " + get_time_stamped_message());
		document.getElementById("console").innerHTML += (('<' + 'p' + '>') + message + ('<' + '/' + 'p' + '>'));
		document.getElementById("start_button" ).style.display = "block";
		play_sound_file();
	}
	catch(e) {
		console.log("An error occurred during the execution of the function finish_simulation(): " + e);
	}
}

 /**
 * Generate a random two-dimensional coordinate pair for 
 * plotting a pixel "point" on a Cartesian Plane.
 * 
 * If the pixel is plotted within 100 pixels of the center 
 * of the square canvas (whose side lengths are 200 pixels), 
 * then the pixel is colored magenta (#ff00ff).
 * 
 * Otherwise (if the pixel is plotted outside of the circle 
 * (and the circle is is inscribed nside of the square canvas)), 
 * the pixel is colored green.
 *
 * @param {Object} simulation - a Window or WorkerGlobalScope object 
 *                              for scheduling function calls.
 */
function plot_random_pixel_on_square_canvas(simulation) {
	try {
		let seconds_remaining = 0, magenta_dot_count = 0, green_dot_count = 0, pi_approximation = 0;
		let square_canvas = undefined, context = undefined;
		let canvas_length = 0, magenta_radius = 0;
		let distance_between_point_and_origin = 0, random_coordinate_pair = {}, origin = {};
		if (!validate_square_canvas_dimensions()) {
			throw "validate_square_canvas_dimensions() returned false.";
		}
		square_canvas = document.getElementById("square_canvas");
		context = square_canvas.getContext("2d");
		canvas_length = square_canvas.offsetWidth;
		magenta_radius = Math.floor(canvas_length / 2);
		seconds_remaining = parseInt(document.getElementById("seconds_remaining_display").innerHTML);
		magenta_dot_count = parseInt(document.getElementById("magenta_dot_count_display").innerHTML);
		green_dot_count = parseInt(document.getElementById("green_dot_count_display").innerHTML);
		pi_approximation = parseInt(document.getElementById("pi_approximation_display").innerHTML);
		// Decrement seconds remaining by exactly one second.
		seconds_remaining -= 1;
		// Set the origin point to represent the coordinates of the middle "point" of the square canvas.
		origin = { X : magenta_radius, Y : magenta_radius };
		// Generate a random coordinate pair which represents a point inside of the square canvas.
		random_coordinate_pair = generate_random_two_dimensional_coordinate_pair();
		// Use the Distance Formula to compute the shortest path between the origin and the random point.
		distance_between_point_and_origin = compute_distance_between_two_planar_points(origin, random_coordinate_pair);
		// To avoid the "division by zero" error, set pi_approximation to 0 if the sum of magenta_dot_count and green_dot_count ais 0.
		pi_approximation = ((magenta_dot_count + green_dot_count) !== 0) ? (4 * (magenta_dot_count / (magenta_dot_count + green_dot_count))) : 0;
		// Plot a green pixel (and update the count of green pixels) if the random pixel is placed outside of the magenta radius.
		// Plot a magenta pixel (and update the count of magenta pixels) if the random pixel is placed inside of the magenta radius.
		if (distance_between_point_and_origin > magenta_radius) {
			context.beginPath();
 			context.rect(random_coordinate_pair.X, random_coordinate_pair.Y, 1, 1);
 			context.strokeStyle = "#00ff00";
 			context.stroke();
 			green_dot_count += 1;
		}
		else {
			context.beginPath();
 			context.rect(random_coordinate_pair.X, random_coordinate_pair.Y, 1, 1);
 			context.strokeStyle = "#ff00ff";
 			context.stroke();
 			magenta_dot_count += 1;
		}
		document.getElementById("seconds_remaining_display").innerHTML = seconds_remaining;
		document.getElementById("magenta_dot_count_display").innerHTML = magenta_dot_count;
		document.getElementById("green_dot_count_display").innerHTML = green_dot_count;
		document.getElementById("pi_approximation_display").innerHTML = pi_approximation;
		// When the timer reaches zero seconds remaining, the simulation will stop.
 	    if (seconds_remaining === 0) {
 	    	clearInterval(simulation);
 	    	finish_simulation();
 	    }
	}
	catch(e) {
		console.log("An error occurred during the execution of the function plot_random_pixel_on_square_canvas(): " + e);
	}
}

/**
 * When the start() button is clicked, a 30-minute animation begins.
 *
 * For each second which elapses during the animation, exactly one 
 * pixel-sized dot is randomly plotted inside a square canvas which 
 * is 200 pixels in length.
 *
 * If a dot is plotted within 100 pixels of the center of the square 
 * canvas, the dot is colored magenta.
 *
 * Otherwise (if a dot is plotted farther than 100 pixels away from 
 * the center of the square canvas), the dot is colored green.
 *
 * For each second which elapses during the animation, the value of 
 * PI is approximated using the following formula:
 *
 * pi_approximation = (4 * (magenta_dot_count / (magenta_dot_count + green_dot_count))).
 */
function start() {
	try {
		// Print a time-stamped message to the web page which indicates when the simulation started.
		let message = ("The button was clicked at time: " + get_time_stamped_message());
		document.getElementById("console").innerHTML += (('<' + 'p' + '>') + message + ('<' + '/' + 'p' + '>'));
		// Initialize the timer to display 1800 seconds (which is equivalent to 30 minutes).
		document.getElementById("seconds_remaining_display").innerHTML = '1800';
		document.getElementById("magenta_dot_count_display").innerHTML = '0';
		document.getElementById("green_dot_count_display").innerHTML = '0';
		document.getElementById("pi_approximation_display").innerHTML = '0';
		// Disable the start() button by hiding it until the simulation is finished.
		document.getElementById("start_button" ).style.display = "none";
		// Begin updating plotting a random magenta or green pixel once per second (and 1 second is equal to 1000 milliseconds).
		simulation = setInterval( function() { plot_random_pixel_on_square_canvas(simulation); }, 1000);
	}
	catch(e) {
		console.log("An error occurred during the execution of the function start(): " + e);
	}
