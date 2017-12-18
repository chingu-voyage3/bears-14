# bears-14

Web application built to facilitate event scheduling for the romanian red cross.

## User Stories (MVP)

* Admin users will be able to create event
* Authenticated users will be able to volunteer for events
* Calendar page shows a list of events
* Users will be able to filter the calendar for events by country, event date and event type
* Event details page shows event location, list of volunteers, event creator, logistics required, etc.
* Event feed page, upcoming events are showcased in this page

### Other User Stories

* Social chat application integration
* First aid guide
* Multiple levels of permissions - admin, project leader, volunteer

## Quick Start

```
  git clone https://github.com/chingu-voyage3/bears-14.git
  /* cd into server, install server dependencies && install client dependencies */
  npm run dev
```

## Development
### Directory Structure
Client directory nested within server directory. During development, client will be served by webpack dev server and api requests will be proxied to the backend server. Whereas during production express backend server will be reponsible for serving both api routes and static frontend react application.


### Server
```http://localhost:5000/ ```

Authentication routes on */auth*. Authentication using passport google-oauth-20 strategy


### Client
``` http://localhost:3000/ ```

React application with api requests proxied to localhost:5000. Styling using bootstrap 4.

### Database
MongoDB with mongoose ODM. 2 models defined in boilerplate setup - Event and User, mock data generated using faker
