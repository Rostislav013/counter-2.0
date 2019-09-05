import React, { Component } from 'react'; //for class type of components
import './App.css';
import react from './react.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0}
  }
  changeState = () => {
      this.setState( {number: this.state.number + 1}
      );
    }
  less = () => {
      this.setState({number: this.state.number -1});
    }
  getNumber = (curNum) => {return !curNum ? "original" : curNum % 2 === 0 ? "even" : '' } //ES6 if,  else if, else

  resetState = () => {
    this.setState({number: 0});
  }
  render() {
    return (
      <div>
        <h1>Click on circle</h1>
        <div className={"cyrcle " + this.getNumber(this.state.number)} onClick={this.changeState}>
          <h1>{this.state.number}</h1>
        </div>
        <div className="reset">
          <button className="butt"  onClick={this.resetState}>Reset</button><br></br>
          <button className="buttLess" onClick={this.less}>Decrease</button>
        </div>
        <div className="madeInReact">
          <img src={react} alt="Made in React" />
        </div>
      </div>
    );
  }
}

export default App; //ES6
