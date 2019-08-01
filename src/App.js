import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './reset.css';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      newTodo:'',
      todoList:[
        {id:1,title:'第一个待办'},
        {id:2,title:'第二个待办'}
      ]
    }
  }
  render(){
    let todos=this.state.todoList.map((item,index)=>{
      return (
        <li><TodoItem todo={item} /></li>
        )
    })
    return (
      <div className='App'>
        <h1>我的待办</h1>
        <div className='inputWrapper'>
          <TodoInput content={this.state.newTodo} />
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
