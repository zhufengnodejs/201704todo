import * as types from '../action-types';
export default {
  addTodo(title){
    //返回一个addTodo的action
    return {type:types.ADD_TODO,title};
  }
}