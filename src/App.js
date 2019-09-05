import React, { Component } from 'react'; //for class type of components
import './App.css';
import react from './react.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {number: 0}
  }
  changeState = () => {
       this.setState( {number: this.state.number + 1}  );
    }

  /*less = () => {
   if (this.state.number > 0) {
      this.setState({number: this.state.number -1});
      }
    }*/

    less = () => {
      this.setState(prevState => 
          ({number: prevState.number ? prevState.number-1: 0})
      )
       }




 // getNumber = (curNum) => {return curNum % 2 === 0 && curNum % 5 === 0 && curNum !==0 ? 'pink' : !curNum  ? "original" : curNum % 2 === 0 ? "odd" : 'even';} //ES6 if,  else if, else
  getNumber = (curNum) => {return curNum % 10 === 0 && curNum !==0 ? 'pink' : !curNum  ? "original" : curNum % 2 === 0 ? "odd" : 'even';} //ES6 if,  else if, else
  render() {
    return (
      <div>
        <h1>Click on circle</h1>
        <div className={"cyrcle " + this.getNumber(this.state.number)} >
          <h1>{this.state.number}</h1>
        </div>
        <div className="reset">
          <button className="butt"  onClick={this.changeState}>Add</button>
          <button className="butt"  onClick={() => this.setState({number: 0})}>Reset</button>
          <button className="butt" onClick={this.less}>Decrease</button>
        </div>
        <div className="madeInReact">
          <img src={react} alt="Made in React" />
        </div>
      </div>
    );
  }
}

export default App; //ES6
