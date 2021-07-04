const repeatString = function(text, n) {
	let out = "";

	if (n < 0) {
		return "ERROR";
	}

	for (let i = 0; i < n; i++) {
		out += text;
	}

	return out;
};

module.exports = repeatString;
