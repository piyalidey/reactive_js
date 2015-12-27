//Let's add a concatAll() function to the Array type. The concatAll() function iterates over each 
//sub-array in the array and collects the results in a new, flat array. Notice that the concatAll() 
//function expects each item in the array to be another array.
//concatAll is a very simple function, so much so that it may not be obvious yet how it can be combined with map() to query a tree.

Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		results.push.apply(results, subArray);
	});

	return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array
