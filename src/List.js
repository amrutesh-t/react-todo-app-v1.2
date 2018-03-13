import React from 'react';
import './List.css'

export class List extends React.Component {

  constructor(props){
    super(props);
    this.state = {hoverEl: -1};
  }

  renderList(val, index){
    return(
      React.createElement("li", { key: index,
                                  onMouseOver: ()=>(this.setState({hoverEl:index})),
                                  onMouseOut: ()=>(this.setState({hoverEl: -1})),
                                  className: ((val.active && val.completed)?
                                                    'activeAndComplete':((val.checked && val.active)?
                                                          'active':((val.checked && val.completed)?
                                                                'complete':'inActiveAndInComplete')
                                              )) },
        React.createElement("div", null,
          React.createElement("span", null, val.todo)
        ),
        React.createElement("div", { className: (val.checked || this.state.hoverEl === index)? "show": "hide" },
          React.createElement("input", { type: "checkbox",
            id: index,
            onChange: () => this.props.onChange(index),
            checked: val.checked }),
          React.createElement("label", { htmlFor: index },
            React.createElement("span")
          ),
          React.createElement("span", { onClick: ()=>this.props.onDelete(index),
                                        className: "iconClass",
                                        title: "Delete" }, " 🗑 ")
        )
      )
    )
  }

  render() {
    return (
      React.createElement("ul", null, this.props.todos.map((val, index) => (this.renderList(val, index))))
    );
  }
}
