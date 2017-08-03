import React, {Component} from 'react';
import {connect} from 'react-redux';
class TodoList extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.list.map((todo,index)=>(
            <li key={index} className="list-group-item">
              {todo.title}
            </li>
          ))
        }
      </ul>
    )
  }
}
//
// state 是合并后的状态树 {todos:{list:[]},filter:'all'}
export default connect(
  state => ({list: state.todos.list})
)(TodoList);