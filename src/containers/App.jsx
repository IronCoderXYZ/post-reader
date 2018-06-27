// NPM Imports
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import React, { Component, Fragment } from 'react';
// Local Imports
import Header from '../components/Header';
import PostList from '../components/PostList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], error: null, darkMode: false, loading: true,
    };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  componentDidMount() {
    const url = 'https://thewirecutter.com/wp-json/wp/v2/posts';
    axios
      .get(url)
      .then(({ data }) => this.setState({ posts: data, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  toggleDarkMode() {
    const { darkMode } = this.state;
    this.setState({ darkMode: !darkMode });
  }

  render() {
    const {
      posts, error, darkMode, loading,
    } = this.state;

    return (
      <Fragment>
        <Header darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
        {loading ? (
          <p>
            Loading
          </p>
        ) : (
          <Row>
            <Col xs="8" className="mx-auto">
              {error ? (
                <p>
                  An error occured
                </p>
              ) : (
                <PostList posts={posts} darkMode={darkMode} />
              )}
            </Col>
          </Row>
        )}
      </Fragment>
    );
  }
}

export default App;
