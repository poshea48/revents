import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import NavBar from '../../features/nav/NavBar/NavBar'
import HomePage from '../../features/home/HomePage'
import EventDashboard from    '../../features/events/EventDashboard/EventDashboard'
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage'
import PeopleDashboard from   '../../features/user/PeopleDashboard/PeopleDashboard'
import UserDetailedPage from  '../../features/user/UserDetailed/UserDetailedPage'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import EventForm from         '../../features/events/EventForm/EventForm'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path='/create' component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>


    );
  }
}

export default App;
