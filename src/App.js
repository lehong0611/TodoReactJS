import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoItems: [
        {title: 'Do the laundry', isComplete: true},
        {title: 'Do the cooking', isComplete: true},
        {title: 'Sweep the floor', isComplete: true}
      ]
    };

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);

    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  onItemClicked(item) {
    return (even) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }
  }

  onKeyUp(even) {
    if (even.keyCode === 13) { // enter key
      let text = even.target.value;
      if (!text || text === '') {
        return;
      }

      text = text.trim();
      if (!text) { return; }

      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false},
          ...this.state.todoItems
        ]
      });
    } 
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const { todoItems, newItem } = this.state;
    if (todoItems.length) {
      return (
        <div className="App">
          <div className="Header">
            <img src={tick} alt="" width={28} height={28}/>
            <input 
              type="text"  
              placeholder="What needs to be done ?" 
              value={newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp} 
              ref={this.inputElement} 
              />
          </div>
          { todoItems.length && todoItems.map( (item, index) => 
            <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />
            )
          }
        </div>
      );
    } else {
      return (
        <div className="App">Nothing here.</div>
      );
    }
  }
}

export default App;
