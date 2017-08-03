import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import todoActions from '../store/actions/todos';
/**
 * 1.增加一个动作类型 action-types.js
 * 2.增加一个action  todos.js
 * 3.为reducer添加一个case
 * 4.在组件里事件发生的时候调用action方法
 */
class TodoList extends Component {
  //1.得到要切换状态的todo 2. 发射切换状态的action
  handleChange = (id)=>{
     this.props.changeTodoCompleted(id);
  }
  render() {
    return (
      <ul className="list-group">
        {
          this.props.list.map((todo,index)=>(
            <li key={index} className="list-group-item">
              <input
                type="checkbox"
                onChange={()=>this.handleChange(todo.id)}
                checked={todo.completed}/>
              {todo.title}
            </li>
          ))
        }
      </ul>
    )
  }
}
let mapStateToProps = state => ({list: state.todos.list});
let mapDispatchToProps =  dispatch=>bindActionCreators(todoActions,dispatch)
// state 是合并后的状态树 {todos:{list:[]},filter:'all'}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);