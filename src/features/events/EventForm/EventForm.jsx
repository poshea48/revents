import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
  state = {
    event: {
      header: "Creat an Event",
      title: '',
      date: '',
      city: '',
      venue: '',
      hostedBy: '',
      attendees: []
    }
  }

  componentDidMount() {
    let {selectedEvent} = this.props
    if (selectedEvent) {
      selectedEvent.header = 'Edit this Event'
      this.setState({ event: this.props.selectedEvent})
    }
  }

  static getDerivedStateFromProps(props) {
    if (props.selectedEvent) {
      props.selectedEvent.header = 'Edit this Event'
      return { event: props.selectedEvent }
    }

    return null
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (this.props.selectedEvent) {
      this.props.handleUpdate(this.state.event)
    } else {
      this.props.handleCreate(this.state.event)

    }
  }

  onInputChange = (e) => {
    e.preventDefault();
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value
    return this.setState({
      event: newEvent
    })
  }
  render() {
    const { onCancel } = this.props
    const { event } = this.state
    return (
      <div>
        <h2>{event.header}</h2>
        <Segment>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input
                onChange={this.onInputChange}
                name="title"
                value={event.title}
                placeholder="First Name"
              />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input
                type="date"
                onChange={this.onInputChange}
                name="date"
                value={event.date}
                placeholder="Event Date"
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                name="city"
                onChange={this.onInputChange}
                value={event.city}
                placeholder="City event is taking place"
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                name="venue"
                onChange={this.onInputChange}
                value={event.venue}
                placeholder="Enter the Venue of the event"
              />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                name="hostedBy"
                onChange={this.onInputChange}
                value={event.hostedBy}
                placeholder="Enter the name of person hosting"
              />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button type="button" onClick={onCancel}>Cancel</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default EventForm;
