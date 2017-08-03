import React,{Component} from 'react';
export default class TodoFooter extends Component{
  render(){
    return (
      <div className="row">
        <div className="col-sm-4" style={{lineHeight:'35px'}}>
          你还有件{this.props.activeCount}待办事项
        </div>
        <div className="col-sm-5">
          <button className="btn btn-default">全部</button>
          <button style={{marginLeft:5}} className="btn btn-default">未完成</button>
          <button style={{marginLeft:5}} className="btn btn-default">已完成</button>
        </div>
        <div className="col-sm-3">
          <button className="btn btn-danger">删除已完成</button>
        </div>
      </div>
    )
  }
}