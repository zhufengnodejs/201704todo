import * as types from '../action-types';
export default {
  addTodo(title){
    //返回一个addTodo的action
    return {type:types.ADD_TODO,title};
  },
  //改变某个todo的完成状态
  changeTodoCompleted(id){
    return {type:types.CHANGE_TODO_COMPLETED,id};
  },
  //全选和全消 selectAll=true全选  =false全消
  toggleAll(selectAll){
    return {type:types.TOGGLE_ALL,selectAll}
  }
}