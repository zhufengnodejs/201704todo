/**
 * 待办事项的数组
 * 过滤类型
 **/
import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';
let reducers = combineReducers({
  todos,filter
});
export default reducers;