//Sometimes, in addition to flat arrays, we need to query trees. Trees pose a challenge because we 
//need to flatten them into arrays in order to apply filter() and map() operations on them. 
//In this section we'll define a concatAll() function that we can combine with map() and filter() to 
//query trees.

//Flatten the movieLists array into an array of video ids

function() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
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
					}
				]
			},
			{
				name: "Dramas",
				videos: [
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
				]
			}
		],
		allVideoIdsInMovieLists = [];

	movieLists.forEach(function(movieList) {
		movieList.videos.forEach(function(video) {
			allVideoIdsInMovieLists.push(video.id);
		});
	});

	return allVideoIdsInMovieLists;

}

//Flattening trees with nested forEach expressions is easy because we can explicitly add items to 
//the array. Unfortunately it's exactly this type of low-level operation that we've been trying to 
//abstract away with functions like map() and filter(). Can we define a function that's abstract 
//enough to express our intent to flatten a tree, without specifying too much information about how 
//to carry out the operation? - Answer later.