import React, { Component } from 'react'

export default class Class_nguyenquangmanh extends Component {
    constructor(props){
        super(props);
            this.state={
                fullName:"nguyenquangmanh",
                class:"k22cntt1"
            }
    }
    
    users = {
        name:"nguyenquangmanh",
        age:20
    }
    //hàm sử lý sự kiện 
    handlechange = (event)=>{
        this.setState({
            fullName:"manhdepzaI",
        })
    }
  render() {
    return (
      <div>
        <h2>class Component new</h2>
        {this.users.name} - {this.users.age}
        <hr/>
        <h3>info: {this.props.info}</h3>
        <h3>Time:{this.props.time}</h3>
        <hr/>
        <h3>State:
            FullName: {this.state.fullName}
            class: {this.state.class}
        </h3>
        <button onclick={this.handlechange}>change name</button>
      </div>
    )
  }
}
