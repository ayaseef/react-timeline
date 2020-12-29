import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types'

const TimelineEvent = (props) => {
  return (
    <div className='timeline-event'>
      <h2 className='event-person'>
        {props.person}
      </h2>
      <span className='event-time'>
        <Timestamp time={props.timeStamp} />
      </span>
      <p className='event-status'>
        {props.status}
      </p>
    </div>
  );
};
TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};
export default TimelineEvent;