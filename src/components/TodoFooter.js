import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import todoActions from '../store/actions/todos';
import filterActions from '../store/actions/filter';
/**
 * 1.增加一个动作类型 action-types.js DEL_COMPLETED
 * 2.增加一个action  todos.js   delCompleted
 * 3.为reducer添加一个case  case DEL_COMPLETED
 * 4.在组件里事件发生的时候调用action方法 this.props.delCompleted
 */
class TodoFooter extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-sm-4" style={{lineHeight:'35px'}}>
          你还有件{this.props.activeCount}待办事项
        </div>
        <div className="col-sm-5">
          <button onClick={()=>this.props.changeFilter('all')} className={"btn btn-"+(this.props.filter=='all'?'warning':'default')}>全部</button>
          <button onClick={()=>this.props.changeFilter('active')} style={{marginLeft:5}}
                  className={"btn btn-"+(this.props.filter=='active'?'warning':'default')}>未完成</button>
          <button onClick={()=>this.props.changeFilter('completed')}  style={{marginLeft:5}} className={"btn btn-"+(this.props.filter=='completed'?'warning':'default')}>已完成</button>
        </div>
        <div className="col-sm-3">
          <button
            onClick={this.props.delCompleted}
            className="btn btn-danger">删除已完成</button>
        </div>
      </div>
    )
  }
}
let mapStateToProps = state => (
  {
    activeCount:state.todos.list.filter(item=>!item.completed).length,
    filter:state.filter //all active completed
  }
)
let  mapDispatchToProps = dispatch => (
  {
    ...bindActionCreators(todoActions,dispatch),
    ...bindActionCreators(filterActions,dispatch)
  }
)
export default connect(mapStateToProps,mapDispatchToProps)(TodoFooter);