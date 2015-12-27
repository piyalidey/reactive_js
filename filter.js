//Like projection, filtering an array is also a very common operation. To filter an array we apply 
//a test to each item in the array and collect the items that pass into a new array.
//Use forEach() to collect only those videos with a rating of 5.0

function() {
	var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 4.0,
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": 5.0,
				"bookmark": [{ id:432534, time:65876586 }]
			}
		],
		videos = [];

	newReleases.forEach(function(video) {
		if (video.rating === 5.0) {
			videos.push(video);
		}
	});

	return videos;
}

// Notice that, like map(), every filter() operation shares some operations in common:
// Traverse the array and Add objects that pass the test to a new array.
//To make filtering easier, let's add a filter() function to the Array type. The filter() function accepts a predicate. A predicate is a function that accepts an item in the array, 
// and returns a boolean indicating whether the item should be retained in the new array.

Array.prototype.filter = function(predicateFunction) {
	var results = [];
	this.forEach(function(itemInArray) {
	  if (predicateFunction(itemInArray)) {
		results.push(itemInArray);
	  }
	});

	return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"
		