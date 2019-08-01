import React from 'react'


export default class TodoInput extends React.Component{
	render(){
		return <input type="text" defaultValue={this.props.content} 
			onKeyPress={this.submit}/>
	}
	submit(e){
		console.log(e)
		if(e.key==="Enter"){
			console.log('用户按回车了')
		}
	}
}