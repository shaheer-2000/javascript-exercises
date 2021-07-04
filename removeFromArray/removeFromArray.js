const removeFromArray = function(arr, ...n) {
	for (let i = 0; i < n.length; i++) {
		if (arr.indexOf(n[i]) < 0) {
			continue;
		}

		arr.splice(arr.indexOf(n[i]), 1);
	}

	return arr;
};


module.exports = removeFromArray;
