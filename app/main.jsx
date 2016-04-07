
import * as service from './src/services/pothole-service';
import React from 'react';
import {render} from 'react-dom';
import PotholeTable from './src/components/pothole-table';

service.findAll()
	.then(potholes => {

		potholes = service.removeDuplicateReports(potholes);

		console.log(potholes);

		// init shell
		renderShell();

		function renderShell() {
		    var shell = document.createElement('main');
		    shell.className = 'app-shell';
		    document.body.appendChild(shell);
		    render(<PotholeTable potholes={potholes} />, shell);
		}

/*
		let {total, filled, percent, closed_reports} = service.getPercentFilled(potholes);

		document.getElementById("percent_filled").innerHTML = `${percent}% Completed, ${filled} total potholes filled.`;

    let html = '';

    potholes.forEach(pothole => html += `<tr><td>${pothole.creation_date}</td><td>${pothole.street_address}, ${pothole.zip}</td><td>${pothole.status}</td><td>${pothole.number_of_potholes_filled_on_block}</td><td>${pothole.most_recent_action}</td></tr>`);
    document.getElementById("potholes").innerHTML = html;
*/
  })
  .catch(e => console.log(e));
