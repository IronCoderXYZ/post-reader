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
      darkMode, author, date, title, content, excerpt, link,
    } = this.props;

    const formattedDate = `${date.slice(0, -9)} ${date.slice(11)}`;
    const cardStyle = darkMode ? 'mt-4 bg-dark text-light' : 'mt-4';

    return (
      <Card body className={cardStyle}>
        <CardTitle>
          {title.rendered}
        </CardTitle>
        <p className="my-2">
          {`Published By: ${author}`}
          <br />
          {`Date: ${formattedDate}`}
        </p>
        <div
          style={{ overflow: 'none' }}
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
  date: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  darkMode: PropTypes.bool,
  author: PropTypes.string,
  content: PropTypes.string,
  excerpt: PropTypes.string,
};
Post.defaultProps = {
  date: '',
  link: '',
  title: '',
  author: '',
  content: '',
  excerpt: '',
  darkMode: false,
};
