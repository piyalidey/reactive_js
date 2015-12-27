// Lets add a map() function to the Array Type.
// Map accepts the projection function to be applied to each item in the source array, and returns 
// the projected array.

// JSON.stringify([1,2,3].map(function(x){return x+1;})) === '[2,3,4]'

Array.prototype.map = function (projectionFunction) {
	var results= [];
	this.forEach(function(itemArray){
		results.push(projectionFunction(itemArray));
	});

	return results;
}

// use map() to project an array of videos into an array of (id,title) pairs