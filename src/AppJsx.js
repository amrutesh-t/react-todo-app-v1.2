import React from 'react';
import { List } from './List';
import './App.css';

export default {
  renderHtml() {
    return  React.createElement("div",{ className : "container" },
              React.createElement("h1", null, "todo's"),
              React.createElement("div",{ className: "main" },
                React.createElement("form", null,
                  React.createElement("div", { className: "upper" },
                    React.createElement("button", { onClick: this.handleSwitch(!this.state.switchSearch),
                                                    title: this.state.switchSearch? "New" : "Filter" },
                      React.createElement("i", null, this.state.switchSearch? "ℕ": "⨍")
                    ),
                    React.createElement("input", { type: "text",
                                                   onChange: this.handleChange,
                                                   value: this.state.input,
                                                   placeholder: this.state.switchSearch?"What to do next?":"Filter list" }
                   )
                  ),
                    React.createElement("div", {className: "middle"},
                      React.createElement(List, {todos: this.state.todos,
                                                onChange: (index) => this.handleCheck(index),
                                                onDelete: (index) => this.handleDelete(index)}
                      )
                    ),
                React.createElement("div", {className: "lower"},
                  React.createElement("span", null, (this.state.todos.length?this.state.todos.length:'Nothing') + ' left todo'),
                  React.createElement("button", {onClick: this.handleClick, title: "Add"}, " + "),
                  React.createElement("button", {onClick: this.handleClickAll, title: "All"}, " All "),
                  React.createElement("button", {onClick: this.handleClickActiveAndComplete('active'), title: "Active"}, " Active "),
                  React.createElement("button", {onClick: this.handleClickActiveAndComplete('completed'), title: "Completed"}, " Completed ")
                )
              )
            )
          )
  }
}
