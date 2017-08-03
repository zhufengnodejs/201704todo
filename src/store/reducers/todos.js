import * as types from '../action-types';
//初始值 list就是列表
/**
 * {
 *    completed:false, //是否已完成，默认值为false
 *    title:'' //todo的内容
 *    id:  //todo的ID
 * }
 */
let initState = {list:[]};
export default function(state=initState,action){
  //判断动作的类型
  switch (action.type){
    case types.ADD_TODO://如果是要增加todo的话
      return {list:[...state.list,{
        id:Date.now(),completed:false,title:action.title
      }]};
    default:
      return state;
  }
}