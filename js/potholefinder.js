
import * as service from './pothole-service';

service.findAll()
	.then(potholes => {
    let html = '';
    potholes.forEach(pothole => html += `<tr><td>${pothole.creation_date}</td><td>${pothole.status}</td><td>${pothole.most_recent_action}%</td></tr>`);
    document.getElementById("potholes").innerHTML = html;
  })
  .catch(e => console.log(e));
    