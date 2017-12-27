import React, {Component} from 'react';
export class ScrollingSubBar extends Component {
  handleScroll(e){
    let viewHeight = window.innerHeight || document.documentElement.clientHeight;
    let affixOn = viewHeight * .60;
    let distanceY = window.pageYOffset || document.documentElement.scrollTop;
    let header = document.getElementById("affix-header");
    if (distanceY > affixOn) {
      header.classList.add("fixed")
    }
    else {
      if (header.classList.contains("fixed")) {
        header.classList.remove("fixed");
      }
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll');
  }
  render() {
    return (
      <div id="affix-header" className="scrolling-sub">
        {this.props.children}
      </div>
    )
  }
}
