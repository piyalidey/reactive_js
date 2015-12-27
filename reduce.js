//Sometimes we need to perform an operation on more than one item in the array at the same time. 
//For example, let's say we need to find the largest integer in an array. We can't use a filter() 
//operation, because it only examines one item at a time. To find the largest integer we need to 
//compare items in the array to each other.

//One approach could be to select an item in the array as the assumed largest number (perhaps the 
//first item), and then compare that value to every other item in the array. Each time we come across 
//a number that was larger than our assumed largest number, we'd replace it with the larger value, 
//and continue the process until the entire array was traversed.

//If we replaced the specific size comparison with a closure, we could write a function that handled
// the array traversal process for us. At each step our function would apply the closure to the last
// value and the current value and use the result as the last value the next time. Finally we'd be 
//left with only one value. This process is known as reducing because we reduce many values to a 
//single value.

//This process is a reduction because we're using the information we derived from the last 
//computation to calculate the current value. However herewe still have to specify
// the method of traversal. Wouldn't it be nice if we could just specify what operation we wanted to
// perform on the last and current value? Let's create a helper function to perform reductions on 
//arrays.

//Let's add a reduce() function to the Array type. Like map. Take note this is different from the reduce 
//in ES5, which returns an value instead of an Array!


// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];

Array.prototype.reduce = function(combiner, initialValue) {
	var counter,
		accumulatedValue;

	// If the array is empty, do nothing
	if (this.length === 0) {
		return this;
	}
	else {
		// If the user didn't pass an initial value, use the first item.
		if (arguments.length === 1) {
			counter = 1;
			accumulatedValue = this[0];
		}
		else if (arguments.length >= 2) {
			counter = 0;
			accumulatedValue = initialValue;
		}
		else {
			throw "Invalid arguments.";
		}

		// Loop through the array, feeding the current value and the result of
		// the previous computation back into the combiner function until
		// we've exhausted the entire array and are left with only one function.
		while(counter < this.length) {
			accumulatedValue = combiner(accumulatedValue, this[counter])
			counter++;
		}

		return [accumulatedValue];
	}
};

// Retrieve url of the largest boxart using reduce()

function() {
	var boxarts = [
			{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
			{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
			{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
			{ width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
		];

	// You should return an array containing only the largest box art. Remember that reduce always
	// returns an array with one item.
	return boxarts.
	  reduce(function(acc,curr) {
		if (acc.width * acc.height > curr.width * curr.height) {
		  return acc;
		}
		else {
		  return curr;
		}
	  }).
	  map(function(boxart) {
		return boxart.url;
	  });
}


