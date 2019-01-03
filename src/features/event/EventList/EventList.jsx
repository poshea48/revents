import React, { Component } from 'react';
import PropTypes from 'prop-types'
import EventListItem from './EventListItem'

class EventList extends Component {
  render () {
    const eventItems = this.props.events.map((event) => {
      return <EventListItem key={event.id} event={event} />
    })
    return (
      <div>
        {eventItems}
      </div>
    )
  }
}

export default EventList;
