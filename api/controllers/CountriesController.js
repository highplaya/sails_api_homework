/**
 * CountriesController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function find(req, res){
	var country = req.param('name');
	return res.send(Countries.data[country]);
}

function customMessage(req, res){
	 res.view('customMessage', { message: 'Helloooooooooooo!'})
}

 function getCountries(req, res){
	res.send(Object.keys(Countries.data));
}

function getHotelsInCountry(req, res){

	var country = req.param('name');

	res.send(Countries.data[country].hotels);

}

function addCountry(req, res){
	Countries.data[req.body.name] = { 'description': '', 'hotels': [] };
	res.send('ok')
}

function addHotel(req, res){
	Countries.data[country].hotels.push({ 'id': Countries.nextId(), 
								'hotel': req.body.hotel, 
								'description': req.body.description });
	res.send('ok')
}

function removeHotel(req, res){
	var id = parseInt(req.param('id'));

	for(var country in Countries.data){
		Countries.data[country].hotels.forEach(function(hotel, i, array){
			if(hotel.id === id){
				array.splice(i, 1);
				res.send('ok');
			}
		})
	}

	res.send('not found')
}

function getHotelDescription(req, res){
	var result = "";
	var id = parseInt(req.param('id'));

	for(var country in Countries.data){
		Countries.data[country].hotels.forEach(function(hotel, i, arr){
			if(hotel.id === id){
				result = hotel.description;
			}
		})
	}

	if(!result){ res.status(400); res.send('bad request'); }
	res.send(result);
}

function updateHotelDescription(req, res){
	var id = parseInt(req.param('id'));
	var desc = req.body.description;

	for(var country in Countries.data){
		Countries.data[country].hotels.forEach(function(hotel, i, arr){
			console.log(hotel);
			if(hotel.id === id){
				hotel.description = desc;
				res.send('ok')
			}
		})
	}

	res.send('not found')
}

module.exports = {
	customMessage: customMessage,
	getCountries: getCountries,
	getHotelsInCountry: getHotelsInCountry,
	addCountry: addCountry,
	addHotel: addHotel,
	removeHotel: removeHotel,
	getHotelDescription: getHotelDescription,
	updateHotelDescription: updateHotelDescription,
	find: find
};