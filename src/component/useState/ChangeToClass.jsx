import React, {Component,useState} from 'react';

export default class ChangeToClass extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:'',
            count:0
        }
    }
    render() {
        return(
            <div>
                <p>start from {this.state.count}</p>
                <button onClick={()=> this.setState({count: this.state.count+1})}>click me</button>
                <input name='name' value={this.state.name} onChange={(e)=> this.setState({name:e.target.value})}/>
            </div>
        )
    }
}