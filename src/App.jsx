import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import ContactPage from './pages/ContactPage/ContactPage'
import ContactDetails from './pages/ContactDetailsPage/ContactDetailsPage'
import ContactEditPage from './pages/ContactEditPage/ContactEditPage'

import { connect } from 'react-redux'

class App extends React.Component {


  render() {

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/contact/edit/:id?" component={ContactEditPage} />
          <Route exact path="/contact/:id" component={ContactDetails} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)