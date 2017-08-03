import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
export default class App extends Component{
  render(){
    return (
      <div className="container" style={{marginTop:'20px'}}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-success">
              <div className="panel-heading">
                <TodoHeader/>
              </div>
              <div className="panel-body">
                <TodoList/>
              </div>
              <div className="panel-footer">3</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}