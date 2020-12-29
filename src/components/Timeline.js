import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
import PropTypes from 'prop-types'

const Timeline = (timelineEvents) => {
  const eventComponents = timelineEvents.events.map((event, i) => {
    return (
      <TimelineEvent key={i} person={event.person} timeStamp={event.timeStamp} status={event.status} />
    ); 
});
  return (
    <div className='timeline'>{eventComponents}</div>
  );
};
Timeline.propTypes = {
  events: PropTypes.array.isRequired
}; 
export default Timeline;
