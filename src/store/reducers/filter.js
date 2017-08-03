import * as types from '../action-types';
//过滤器的类型有三种 all active completed
let initState = 'all';
export default function(state=initState,action){
  switch(action.type){
    //dispatch({type:'CHANGE_FILTER',filter:'active'})
    case types.CHANGE_FILTER:
      return action.filter;//filter指的是新的过滤类型
    default:
      return state;
  }
}