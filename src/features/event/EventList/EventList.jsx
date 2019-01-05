import React, { Component } from 'react';
import PropTypes from 'prop-types'
import EventListItem from './EventListItem'

class EventList extends Component {
  render () {
    const { events, onEventOpen, deleteEvent } = this.props
    const eventItems = events.map((event) => {
      return <EventListItem deleteEvent={deleteEvent} onEventOpen={onEventOpen} key={event.id} event={event} />
    })
    return (
      <div>
        {eventItems}
      </div>
    )
  }
}

export default EventList;
