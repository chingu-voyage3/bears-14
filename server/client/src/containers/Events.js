import React, { Component } from 'react';
import axios from 'axios';

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    axios
      .get('/api/events')
      .then(({ data: events }) => {
        console.log(events);
        this.setState(() => ({ events }))
      })
      .catch(e => console.error(e));
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        {events.map(event =>
          <div>
            <span>{event.name}</span>
            <p>
              {event.description}
            </p>
            <p>
              {event.createdAt}
            </p>
            <p>
              {event.updatedAt}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Events;
