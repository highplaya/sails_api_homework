/**
* Countries.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var id = 1;
function nextId(){
	return id++;
}

module.exports = {

	nextId: nextId,

  data: {
 	"Ukraine": {
		"description": "Ukraine description",
		"hotels": [
			{
				"id": nextId(),
				"name": "Ukraina hotel",
				"description": "Ukraina hotel description"
			},
			{
				"id": nextId(),
				"name": "Swiss",
				"description": "Swiss description"
			}
		]
	},
	"France": {
		"description": "France description",
		"hotels": [
			{
				"id": nextId(),
				"name": "Hilton",
				"description": "Hilton description"
			},
			{
				"id": nextId(),
				"name": "Swiss",
				"description": "Swiss description"
			}
		]
	}	 	

  }
};

