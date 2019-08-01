import React from 'react'


export default class TodoInput extends React.Component{
	render(){
		return <input type="text" value={this.props.content} 
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