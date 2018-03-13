import React from 'react';
import AppUtility from './AppUtility';
import AppJsx from './AppJsx';

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], bkpTodos:[], input: '', switchSearch: true};

    this.handleChange                 = AppUtility.handleChange.bind(this);
    this.handleClick                  = AppUtility.handleClick.bind(this);
    this.handleClickAll               = AppUtility.handleClickAll.bind(this);
    this.handleClickActiveAndComplete = this.handleClickActiveAndComplete.bind(this);
    this.handleCheck                  = AppUtility.handleCheck.bind(this);
    this.handleDelete                 = AppUtility.handleDelete.bind(this);
    this.handleSwitch                 = this.handleSwitch.bind(this);
    this.renderHtml                   = AppJsx.renderHtml.bind(this);
  }

  render() {
    return (
      this.renderHtml()
  )}

  handleSwitch = switchSearch => event => {
    event.preventDefault();
    this.setState({switchSearch: switchSearch});
  }

  handleClickActiveAndComplete = param => event => {
    event.preventDefault();
    const newTodos = this.state.todos;

    this.setState(prevState => ({
      todos: newTodos.map((val)=>{
                                    val[param]=val.checked;
                                    return val;
                                 }),
      bkpTodos: prevState.bkpTodos,
      input: ''
    }));
  }
}
