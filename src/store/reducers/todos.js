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
    //如果要修改todo完成状态的话
    case types.CHANGE_TODO_COMPLETED:
      return {
        list:state.list.map(item=>{
          if(item.id === action.id){
            item.completed = !item.completed;
          }
          return item;
        })
      }
    case types.TOGGLE_ALL:
      return {
        list:state.list.map(item=>{
          item.completed = action.selectAll;
          return item;
        })
      }
    case types.DEL_TODO: //删除某个TODO
      return {
        list:state.list.filter(item=>item.id!=action.id)
      }
    case types.DEL_COMPLETED:
      return {
        list:state.list.filter(item=>!item.completed)
      }
    default:
      return state;
  }
}