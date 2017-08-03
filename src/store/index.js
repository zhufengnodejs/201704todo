import {createStore} from 'redux';
import reducers from './reducers';
let store = createStore(reducers);
//把store变成全局变量，方便在控制台使用 上线前一定要删除
window.store = store;
export default store;

