
import React from 'react';
import PotholeRow from './pothole-row';

const PotholeTable = ({potholes}) => {

  let rows = [];

  potholes.forEach(function(pothole, index) {
    if (pothole.status === 'Completed') {
      rows.push(<PotholeRow key={'pothole_' + index} address={pothole.street_address} date_open={pothole.creation_date} date_closed={pothole.completion_date} number_patched={pothole.number_of_potholes_filled_on_block} />);
    }
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Address</th>
          <th>Time Open</th>
          <th># of Holes Patched</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default PotholeTable;
