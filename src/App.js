import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './reset.css';
import './App.css';
import * as localStore from './localStore'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      newTodo:'',
      todoList:localStore.load('todoList') || [],
      time:new Date().toLocaleTimeString()
    }
    setInterval(()=>{
      this.setState({
      })
    },1000)
  }
  delete(event,todo){
    todo.deleted=true
    this.setState(this.state)
  }
  componentDidUpdate(){
    localStore.save('todoList',this.state.todoList)
  }
  toggle(e,todo){
    todo.status=todo.status==='completed'?'':'completed'
    this.setState(this.state)
  }
  changeTitle(event){
    this.setState({
      newTodo:event.target.value,
      todoList:this.state.todoList
    })
  }
  addTodo(event){
    if(!event.target.value){return}
    console.log('我得添加一个todo了')
    this.state.todoList.push({
      id:idMaker(),
      title:event.target.value,
      status:null,
      deleted:false
    })
    this.setState({
      newTodo:'',
      todoList:this.state.todoList
    })
  }
  render(){
    let todos=this.state.todoList
      .filter((item)=>!item.deleted)
      .map((item,index)=>{
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle.bind(this)}
            onDelete={this.delete.bind(this)}/>
        </li>
        )
    })
    console.log(todos)
    return (
      <div className='App'>
        <div className="time" >当前时间<br />{new Date().toString().match(/[0-9]{2}:[0-9]{2}:[0-9]{2}/)[0]}</div>
        <h1>我的备忘录</h1>
        <div className='inputWrapper'>
          <TodoInput content={this.state.newTodo}
            onChange={this.changeTitle.bind(this)}
            onSubmit={this.addTodo.bind(this)}/>
          <ol className="todoList">
            {todos}
          </ol>
        </div>
      </div>
    );
  }
}
let id=0
function idMaker(){
  id+=1
  return id
}

export default App;
