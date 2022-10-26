import React, { Component } from "react";
import profile_img from "../Component/profile_img.jpg";
import { Button, Col, Row } from "react-bootstrap";

export class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Taher GUETAT",
      bio: "Mining Engineer & Web Developer Enthusiast",
      imgSrc: profile_img,
      profession: "Engineer",
      
    };
  }
  
 
  render() {
    return (
      <div>
        <Row className="px-4 my-5">
          <Col sm={7}>
            <img src={this.state.imgSrc} style={{ width: "18rem" }} />
          </Col>
          <Col sm={5}>
            <h1 class="font-weight-light">{this.state.bio}</h1>
            <p class="mt-4">
              {this.state.fullName}
              <br />
              {this.state.profession}
            </p>
          </Col>
        </Row>
        
      </div>
    );
  }
};


export class Show extends React.Component{
    constructor(props){
        super(props)
        this.state={
            timeUp:0
        };
    }
        componentDidMount(){
            setInterval(
                ()=> this.setState({timeUp:this.state.timeUp+1}),1000);
        }
    render(){
        return(
            <div>
                This component has been mounted for<h1>{this.state.timeUp}</h1>seconds
            </div>
        );
    }
};

