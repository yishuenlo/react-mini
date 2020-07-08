import React, { Component } from "react";
import Output from "./output/Output";
import Input from "./input/Input";
import "./CharacterGenerator.css";

class CharacterGenerator extends Component {
  state = {
    input: "",
  };

  inputChangeHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    const imageStyle = {
      width: "300px",
      height: "300px",
      margin: "1em auto",
    };

    return (
      <div className="Characters">
        <h2>Random Character Generator</h2>
        <Input className='input' inputChange={this.inputChangeHandler} name={this.state.input} />
        <img
          alt="adorable avatars"
          style={imageStyle}
          src={
            this.state.input
              ? `https://api.adorable.io/avatars/${this.state.input}`
              : `https://api.adorable.io/avatars/luke`
          }
        />
        <Output name={this.state.input} />
      </div>
    );
  }
}

export default CharacterGenerator;
