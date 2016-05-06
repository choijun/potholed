
import React from 'react';
import PotholeRow from './pothole-row';

const PotholeTable = ({potholes}) => {

  let rows = [];

  //console.log(potholes);

  potholes.forEach(function(pothole, index) {
    if (pothole.status === 'Completed') {
      rows.push(<PotholeRow key={'pothole_' + index} address={pothole.street_address} number_patched={pothole.number_of_potholes_filled_on_block} />);
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Address</th>
          <th># of Holes Patched</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default PotholeTable;
