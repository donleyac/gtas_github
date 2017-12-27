import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';


export default class LightboxInst extends Component{
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index || 0,
      isOpen: false
    }
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
  }
  openLightbox() {
      this.setState({ isOpen: true });
  }
  closeLightbox() {
      this.setState({ isOpen: false });
  }
  moveNext() {
      this.setState({ index: (this.state.index + 1) % this.props.attr.images.length });
  }
  movePrev() {
      this.setState({ index: (this.state.index + this.props.attr.images.length - 1) % this.props.attr.images.length });
  }
  render() {
      let lightbox;
      if (this.state.isOpen) {
          lightbox = (
              <Lightbox
                  mainSrc={this.props.attr.images[this.state.index]}
                  nextSrc={this.props.attr.images[(this.state.index + 1) % this.props.attr.images.length]}
                  prevSrc={this.props.attr.images[(this.state.index + this.props.attr.images.length - 1) % this.props.attr.images.length]}

                  onCloseRequest={this.closeLightbox}
                  onMovePrevRequest={this.movePrev}
                  onMoveNextRequest={this.moveNext}

                  imageTitle={this.props.attr.titles[this.state.index]}
                  imageCaption={this.props.attr.captions[this.state.index]}
              />
          );
      }
      let style = {
        width: '100%',
        cursor: 'pointer'
      }
      return (<div  style={style} onClick={this.openLightbox}>
                    {this.props.children}
                    {lightbox}
                </div>);
  }
}
