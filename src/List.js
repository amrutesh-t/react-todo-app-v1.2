import React from 'react';
import './List.css'

export class List extends React.Component {

  constructor(props){
    super(props);
    this.state = {hoverEl: -1};
  }

  renderList(val, index){
    return(
        <li key = {index}
            onMouseOver={()=>(this.setState({hoverEl:index}))}
            onMouseOut={()=>(this.setState({hoverEl: -1}))}
            className={(val.active && val.completed)?'activeAndComplete':((val.checked && val.active)?'active':((val.checked && val.completed)?'complete':'inActiveAndInComplete'))}>
            <div>
              <span>
                {val.todo}
              </span>
            </div>
            <div className={(val.checked || this.state.hoverEl === index)?'show':'hide'}>
              <input type="checkbox"
                id={index} onChange={() => this.props.onChange(index)}
                checked={val.checked}/>
                <label htmlFor={index}><span></span></label>
              <span onClick={()=>this.props.onDelete(index)} className={'iconClass'} title="Delete"> &#9986; </span>
            </div>
        </li>
    )
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((val, index) => (this.renderList(val, index)))}
      </ul>
    );
  }
}
