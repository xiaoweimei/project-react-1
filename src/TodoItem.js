import React from 'react';
import './TodoItem.css'
export default class TodoItem extends React.Component{
	render(){
		return (
			<div className="TodoItem">
				<input type='checkbox' checked={this.props.todo.status==='completed'}
				conChange={this.toggle.bind(this)} />
				<span className="title">{this.props.todo.title}</span>
				<button onClick={this.delete.bind(this)}>删除</button>
			</div>
		)
	}
	delete(e){
		this.props.onDelete(e,this.props.todo)
	}
	toggle(e){
		this.props.onToggle(e,this.props.todo)
	}
}