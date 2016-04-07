import React from 'react';

const PotholeRow = ({address, date_open, date_closed, number_patched}) => {
  return (
    <tr>
      <td><strong>{address}</strong></td>
      <td>--</td>
      <td>{number_patched}</td>
    </tr>
  );
};

export default PotholeRow;
