import React from 'react';
import { List } from './List'
import AppUtility from './AppUtility'
import './App.css'

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], bkpTodos:[], input: '', filterInput: '', switchSearch: true};

    this.handleChange                 = AppUtility.handleChange.bind(this);
    this.handleClick                  = AppUtility.handleClick.bind(this);
    this.handleClickAll               = AppUtility.handleClickAll.bind(this);
    this.handleClickActiveAndComplete = this.handleClickActiveAndComplete.bind(this);
    this.handleCheck                  = AppUtility.handleCheck.bind(this);
    this.handleDelete                 = AppUtility.handleDelete.bind(this);
    this.handleSwitch                 = this.handleSwitch.bind(this);
  }

  render() {
    return (
      <div className={'container'}>
        <h1>{"todo's"}</h1>
        <div className={'main'}>
          <form>
            <div className={'upper'}>
              <button onClick={this.handleSwitch(!this.state.switchSearch)}
                      title={this.state.switchSearch?"New":"Filter"}>
                <i className={!this.state.switchSearch?'hide':'show'}>&#8469;</i>
                <i className={this.state.switchSearch?'hide':'show'}>&#x2231;</i>
              </button>
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.input}
                placeholder={this.state.switchSearch?"What to do next?":"Filter list"}
              />
            </div>
            <div className={'middle'}>
              <List todos={this.state.todos} onChange={(index) => this.handleCheck(index)} onDelete={(index)=> this.handleDelete(index)}/>
            </div>
            <div className={'lower'}>
              <span>{this.state.todos.length?this.state.todos.length:'Nothing'} left todo</span>
              <button onClick={this.handleClick} title="Add"> + </button>
              <button onClick={this.handleClickAll} title="All"> All </button>
              <button onClick={this.handleClickActiveAndComplete('active')} title="Active"> Active </button>
              <button onClick={this.handleClickActiveAndComplete('completed')} title="Completed"> Completed </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

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
      input: '',
      filterInput: ''
    }));
    return function(){console.log(arguments)}
  }
}
