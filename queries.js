//We have 2 arrays each containing lists, and videos respectively. Each video has a listId field 
//indicating its parent list. We want to build an array of list objects, each with a name and a 
//videos array. The videos array will contain the video's id and title.

function() {
	var lists = [
			{
				"id": 5434364,
				"name": "New Releases"
			},
			{
				"id": 65456475,
				name: "Thrillers"
			}
		],
		videos = [
			{
				"listId": 5434364,
				"id": 65432445,
				"title": "The Chamber"
			},
			{
				"listId": 5434364,
				"id": 675465,
				"title": "Fracture"
			},
			{
				"listId": 65456475,
				"id": 70111470,
				"title": "Die Hard"
			},
			{
				"listId": 65456475,
				"id": 654356453,
				"title": "Bad Boys"
			}
		];

	return lists.map(function(list) {
		return {
			name: list.name,
			videos:
				videos.
					filter(function(video) {
						return video.listId === list.id;
					}).
					map(function(video) {
						return {id: video.id, title: video.title};
					})
		};
	});
}
        