import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import todoActions from '../store/actions/todos';
class TodoHeader extends Component {
  handleKeyDown = (event)=>{
    let keyCode = event.keyCode;
    if(keyCode == 13 && event.target.value){//如果按下的是回车键的话
      let title = event.target.value;//获得到title的值
      this.props.addTodo(title);
      event.target.value = '';
    }
  }
  render() {
    return (
      <input onKeyDown={this.handleKeyDown} type="text" className="form-control"/>
    )
  }
}
let mapStateToProps = state=>({})
let mapDispatchToProps=dispatch=>bindActionCreators(todoActions,dispatch);
/*let mapDispatchToProps= dispatch=>(
  {
    addTodo:(title)=>dispatch(todoActions.addTodo(title))
    addTodo:(title)=>dispatch({type:'ADD_TODO',title})
  }
)*/
export default connect(
  mapStateToProps,mapDispatchToProps
)(TodoHeader);