// NPM Imports
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import React, { Component, Fragment } from 'react';
// Local Imports
import Header from '../components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], error: null, darkMode: false };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  componentDidMount() {
    const url = 'https://thewirecutter.com/wp-json/wp/v2/posts';
    axios
      .get(url)
      .then(({ data }) => this.setState({ posts: data }))
      .catch(error => this.setState({ error }));
  }

  toggleDarkMode() {
    const { darkMode } = this.state;
    this.setState({ darkMode: !darkMode });
  }

  render() {
    const { darkMode } = this.state;
    return (
      <Fragment>
        <Header darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
      </Fragment>
    );
  }
}

export default App;
