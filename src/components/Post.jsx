// NPM Imports
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Card, Button, CardTitle, Row, Col,
} from 'reactstrap';

// Author link in feed is dead
// DangeroulySetInnerHTML is susceptible to XSS
// but used in this demo to render HTML pulled from feed correctly
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false };
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleDetails() {
    const { showDetails } = this.state;
    this.setState({ showDetails: !showDetails });
  }

  render() {
    const { showDetails } = this.state;
    const {
      author, title, content, excerpt, link,
    } = this.props;

    return (
      <Card body className="mt-4 bg-dark text-light">
        <CardTitle>
          {title.rendered}
        </CardTitle>
        <p className="my-2">
          {`Published By: ${author}`}
        </p>
        <section
          dangerouslySetInnerHTML={{
            __html: showDetails ? content.rendered : excerpt.rendered
          }}
        />
        <Row className="text-center">
          <Col>
            <Button onClick={this.toggleDetails} color="info">
              {showDetails ? 'View Less' : 'View More'}
            </Button>
          </Col>
          <Col>
            <Button href={link} target="_blank" color="primary">
              Open Post
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}
Post.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  excerpt: PropTypes.string,
};
Post.defaultProps = {
  link: '',
  title: '',
  author: '',
  content: '',
  excerpt: '',
};
