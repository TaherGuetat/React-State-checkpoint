import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Person,Show} from "./Component/Person";
import { Navigation } from "./Component/NavigationBar";
import { Container,Button } from "react-bootstrap";

class App extends React.Component {
  state={
    toggle:true
  };
  handleClick(){
    this.setState({toggle:!this.state.toggle})
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Button variant="outline-primary" onClick={()=>this.handleClick()}>{this.state.toggle?'Hide':'Show'}</Button>
        { this.state.toggle?<Person/>:<Show/>}
        <footer className="py-5 my-5 bg-dark">
          <Container className="px-4">
            <p className="text-center text-white">
              Copyright &copy; My Profile website 2021
            </p>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
