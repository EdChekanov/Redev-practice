import React from 'react';

class LifecycleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  async componentDidMount() {
    const response = await fetch('https://todo-redev.herokuapp.com/api/users');

    console.log(await response.json());
  }

  shouldComponentUpdate() {
    return this.state.count % 2 === 0;
  }

  componentDidUpdate() {
    console.log(`Компонент обновлен. Count - ${this.state.count}`);
  }

  componentWillUnmount() {
    console.log('Компонент будет размонтирован');
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Счётчик: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Увеличить</button>
      </div>
    );
  }
}

export default LifecycleComponent;
