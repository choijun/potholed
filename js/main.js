
import * as service from './pothole-service';

service.findAll()
	.then(potholes => {

		let {total, filled, percent, closed_reports} = service.getPercentFilled(potholes);

		document.getElementById("percent_filled").innerHTML = `${percent}% Completed, ${filled} total potholes filled.`;

    let html = '';
    potholes.forEach(pothole => html += `<tr><td>${pothole.creation_date}</td><td>${pothole.status}</td><td>${pothole.number_of_potholes_filled_on_block}</td><td>${pothole.most_recent_action}</td></tr>`);
    document.getElementById("potholes").innerHTML = html;
  })
  .catch(e => console.log(e));