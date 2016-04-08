import React from 'react';
import moment from 'moment';

class PotholeDuration extends React.Component {

  constructor(props) {

    super(props);

    const start = moment(props.date_open);
    const end = moment(props.date_closed);

    this.duration = moment.duration(end - start, 'days').humanize();

    console.log(this.duration);

  }

  render() {
    return (
      <span>{this.duration}</span>
    )
  }
};

export default PotholeDuration;
