import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  constructor(){
    super()
    this.state={
      data:[],
      loading:true
    }
  }
  componentDidMount(){
    let storeddata=JSON.parse(localStorage.getItem("fakestore"))
    if(storeddata){
      this.setState({data:storeddata,loading:false})
    }
    else{
      fetch("https://fakestoreapi.com/products/").then(res=>res.json()).then(res=>{
      console.log(res)
      this.setState({data:res,loading:false})
      localStorage.setItem("fakestore",JSON.stringify(res))
    })
    }
    
  }
  render() {
    if(this.state.loading){
      return <h1>waiting</h1>
    }
    return (
      <div className="container">
        <h1>data</h1>
        {this.state.data.map((val)=>{
          return(
            <div className="card">
            <p className="title">{val.title}</p>
            <p className="price">{val.price}</p>

            </div>
          )
        })}


      </div>
    )
  }
}

