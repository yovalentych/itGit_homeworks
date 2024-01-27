import React from 'react';

class Homework1 extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.s2 = 201;
    this.state = {
      s1: props.p1,
    };
  }

  buttonHandler = () => {
    this.setState((prevState) => ({
      s1: prevState.s1 + 50,
      s2: this.s2 + 50,
    }));
  };

  componentDidMount() {
    this.setState((prevState) => ({
      s1: prevState.s1 + 5,
      s2: this.s2 + 5,
    }));
  }
  render() {
    return (
      <>
        <div>{this.state.s1}</div>
        <div>{this.s2}</div>
        <button onClick={this.buttonHandler}>Push</button>
      </>
    );
  }
}

export default Homework1;
