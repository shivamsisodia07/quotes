import React, { Component } from "react";
import axios from "axios";
import "./App.css";
class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    console.log("hy");
    axios
      .get("https://api.adviceslip.com/advice")
      .then((Response) => {
        console.log(Response);
        const advice = Response.data.slip.advice;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className='app'>
        <div className='card'>
          <h1 className='heading'> {advice}</h1>

          <button className='button' onClick={this.fetchAdvice}>
            <span>Give me advice</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
