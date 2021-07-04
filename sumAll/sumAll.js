const sumAll = function(a, b) {
	let sum = 0;

	if (b < a) {
		sum = a;
		a = b;
		b = sum;
		sum = 0;
	}

	if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
		return "ERROR";
	}

	for (let i = a; i <= b; i++) {
		sum += i;
	}

	return sum;
};

module.exports = sumAll;
