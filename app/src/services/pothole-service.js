
let url = "https://data.cityofchicago.org/resource/7as2-ds3y.json";

export let findAll = () => new Promise((resolve, reject) => {

	fetch(url).then(function(response) {
	  return response.json();
	}).then(function(json) {
	  if (json) {
	  		resolve(json);
	  	} else {
	  		reject("No potholes.");
	  	}
	});

});

export let getPercentFilled = (potholes) => {

	const total = potholes.length;
	let filled = 0;
	let closed_reports = 0;
	let percent = 0;
	let number_on_block = 0;

	potholes.forEach(pothole => {
		if (pothole.status === 'Completed') {

			closed_reports++;

			if(pothole.most_recent_action === 'Pothole Patched') {
				filled += pothole.number_of_potholes_filled_on_block*1;
			}

		}
	});

	percent = (closed_reports/total * 100).toFixed(2);

	return {total, filled, percent};

}

export let removeDuplicateReports = (potholes) => {

	const original = potholes;
	let cleanData = [];

	original.forEach(pothole => {
		if ((pothole.status === 'Open') || (pothole.status === 'Completed')) {
			cleanData.push(pothole);
		}
	});

	return cleanData;

}
