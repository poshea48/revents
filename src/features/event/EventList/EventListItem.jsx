import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Segment, Item, Image, Icon, List, Button } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

class EventListItem extends Component {
  render () {
    const { event, onEventOpen, deleteEvent } = this.props
    const attendees = event.attendees.map((att) => {
      return <EventListAttendee key={att.id} attendee={att} />
    })

    return (
      <Segment.Group>
         <Segment>
           <Item.Group>
             <Item>
               <Image size='tiny' clasName="avatar" circular src={event.hostPhotoURL}/>
               <Item.Content>
                 <Item.Header as="a">{event.title}</Item.Header>
                 <Item.Description>
                   Hosted by <a>{event.hostedBy}</a>
                 </Item.Description>
               </Item.Content>
             </Item>
           </Item.Group>
         </Segment>
         <Segment>
           <span>
             <Icon name="clock" /> {event.date} |
             <Icon name="marker" /> {event.venue}
           </span>
         </Segment>
         <Segment secondary>
           <List horizontal>
             {event.attendees && attendees}
           </List>
         </Segment>
         <Segment clearing>
           <span>{event.description}</span>
            <Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
            <Button onClick={onEventOpen(event)} as="a" color="teal" floated="right" content="View" />
         </Segment>
       </Segment.Group>
    )
  }
}

export default EventListItem;
