import React from 'react'
import './TodoInput.css'

export default class TodoInput extends React.Component{
	render(){
		return <input type="text" value={this.props.content} 
			className='TodoInput'
			onChange={this.changeTitle.bind(this)}
			onKeyPress={this.submit.bind(this)}/>
	}
	submit(e){
		console.log(e)
		if(e.key==="Enter"){
			this.props.onSubmit(e)
		}
	}
	changeTitle(e){
		this.props.onChange(e)
	}
}