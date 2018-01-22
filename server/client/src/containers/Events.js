import React, { Component } from 'react';
import axios from 'axios';

const locations = ['Bucharest', 'Madrid', 'Cluj', 'Barcelona', 'Brasov']

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
      <div className="container position-relative">
        <h2>Events</h2>
        <div className="mb-4">
          {locations.map((location, i) =>
            <button
              key={i}
              type="button"
              className="btn btn-info btn-sm mr-2"
            >
              {location}
            </button>
          )}
        </div>
        <div className="d-flex justify-content-between mb-4">
          <div className="d-flex">
            <div className="dropdown mr-2">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                Country
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#0">Action</a>
              </div>
            </div>

            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
                Branch
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#0">Action</a>
              </div>
            </div>
          </div>

          <button className="btn btn-success">Add Event</button>
          <div
            type="text"
            placeholder="Search an event by name"
            className="input-group position-absolute"
            style={{ top: 0, right: 20, width: 300 }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search an event by name"/>
          </div>
        </div>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Address</th>
              <th scope="col">Name</th>
              <th scope="col">Volunteers Going</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, i) =>
              <tr key={event._id}>
                <th scope="row">{i + 1}</th>
                <td>{event.location.address}</td>
                <td>{event.name}</td>
                <td>{event.volunteers.reduce((acc, cur) => acc + 1, 0)}</td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    );
  }
}

export default Events;
