import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export class RequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      country: '',
      organization: '',
      description: '',
      requestAccess: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    let output = {
      firstName: "firstName: " + this.state.firstName,
      lastName: "lastName: " + this.state.lastName,
      nation: "nation: " + this.state.country,
      organ: "organization: " + this.state.organization,
      descrip: "description: " + this.state.description,
      requestAccess: "Request Access to Demo: " + this.state.requestAccess
    }

    var placeholder = 'mailto:';
    var receipient = 'david.j.ertel@gmail.com?';
    var subject = 'subject=GTAS%20Request' + '%20-%20' + output.firstName + '%20-%20' + output.lastName + '&';
    var body = 'body=' + output.nation +'%0D%0A%0D%0A'+ output.organ +'%0D%0A%0D%0A'
                + output.descrip + '%0D%0A%0D%0A' + output.requestAccess + '%0D%0A%0D%0A';
    var link = placeholder + receipient + subject + body;
    window.open(link);
  }
  render() {
    const textStyle = {
      color: 'white',
      fontStyle: 'italic',
      fontWeight: 100,
      fontSize: '10px'
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="flex">
          <Input
            label="Your First Name*"
            name="firstName"
            state={this.state}
            handleChange={this.handleChange}
          />
          <Input
            label="Your Last Name*"
            name="lastName"
            state={this.state}
            handleChange={this.handleChange}
          />
        </div>
        <div className="flex">
          <Input
            label="Nation or Sovereign State You Represent*"
            name="country"
            state={this.state}
            handleChange={this.handleChange}
          />
          <Input
            label="Your Organization/Agency*"
            name="organization"
            state={this.state}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <Input
            label="Brief description of the issue(s) you need help resolving*"
            name="description"
            type="textarea"
            state={this.state}
            handleChange={this.handleChange}
          />
        </div>
        <div>
          <Input
            label="I would like to request access to the demo site"
            name="requestAccess"
            state={this.state}
            handleChange={this.handleChange}
            type="checkbox"
            separator
          />
        </div>
        <div className="flex justify-between padding-sm">
          <p style={textStyle}>*Required Field</p>
          <Button bsStyle="default" type="submit">
            Send Message
          </Button>
        </div>
      </form>
    );
  }
}
const Input = (props) => {
  const type = props.type?props.type:"text";
  const style = {
    margin: '5px',
    width: '100%'
  }
  const inputStyle = {
    borderRadius: '4px',
    border: '1px solid white',
    margin: '3px',
    width: '100%',
    fontWeight: 300
  }
  const textStyle = {
    color: 'white',
    fontStyle: 'italic',
    fontWeight: 100,
    fontSize: '10px'
  }
  if(props.separator){
    style['borderBottom']= '2px #6798C8 solid';
  }
  if(type==="checkbox"){
    style['display'] = "flex"
    inputStyle['flex'] = "0 0 13px"
    textStyle['fontStyle'] = "normal"
  }
  return(<label style={style}>
    {type!=="textarea"
      ?(<input required style={inputStyle} name={props.name} type={type} value={props.state[props.name]}
      onChange={props.handleChange} />)
      :(<textarea style={inputStyle} rows="4" cols="50" name={props.name}
        value={props.state[props.name]} onChange={props.handleChange} />)

    }
    <p style={textStyle}>{props.label}</p>
  </label>)
}
