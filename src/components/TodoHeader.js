import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import todoActions from '../store/actions/todos';
class TodoHeader extends Component {
  render() {
    return (
      <input type="text" className="form-control"/>
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