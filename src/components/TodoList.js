import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import todoActions from '../store/actions/todos';
/**
 * 1.增加一个动作类型 action-types.js TOGGLE_ALL
 * 2.增加一个action  todos.js   toggleAll
 * 3.为reducer添加一个case  case TOGGLE_ALL
 * 4.在组件里事件发生的时候调用action方法 this.props.toggleAll
 */
class TodoList extends Component {
  //1.得到要切换状态的todo 2. 发射切换状态的action
  handleChange = (id)=>{
     this.props.changeTodoCompleted(id);
  }
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item" key={-1}>
          <input type="checkbox" checked={this.props.activeCount == 0}/>{this.props.activeCount == 0?'全部取消':'全部选中'}
        </li>
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
let mapStateToProps = state => ({
  list: state.todos.list,
  //未完成的待办事项的数量 activeCount==0 意味着全部完成
  activeCount:state.todos.list.filter(item=>!item.completed).length
});
let mapDispatchToProps =  dispatch=>bindActionCreators(todoActions,dispatch)
// state 是合并后的状态树 {todos:{list:[]},filter:'all'}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);