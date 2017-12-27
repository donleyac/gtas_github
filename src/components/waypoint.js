import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {Link, Events, scrollSpy} from 'react-scroll';


export class Waypoint extends Component {
  componentDidMount(){
    Events.scrollEvent.register('begin', function(to, element) {
    });
    Events.scrollEvent.register('end', function(to, element) {
    });
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <Link activeClass="active" to={this.props.to} spy={true} smooth={true} offset={-50} duration={700}>
        <Button bsStyle="primary" className="waypoint">
          {this.props.content}
        </Button>
      </Link>
    );
  }
}
