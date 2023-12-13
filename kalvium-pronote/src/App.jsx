import React from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      input: "",
      todoList: []
    }
  }

  inputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault()
    if (this.state.input.length > 0){
      this.setState({
        input: '',
        todoList: [...this.state.todoList, this.state.input]
      })
    }
  }

  deleteItem = (index) => {
    let arr = this.state.todoList
    arr.splice(index, 1)
    this.setState({
      todoList:arr
    })
  }

  updateItem = (newItem, index) => {
    let arr = this.state.todoList;

    
    arr.splice(index, 1, newItem)

    
    this.setState({
      todoList:arr
    })
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render(){
    return (
      <>
      <h1>To Do List</h1>
      <form onSubmit={this.formSubmit}>
        <input type="text" onChange={this.inputChange} value={this.state.input}/>
        <button>Add</button>
      </form>
      <p>{this.state.input}</p>

      <div className="toDoList">
        <h2>📃 List ✨</h2>
        {this.state.todoList.length == 0 ? (
          <h3>List is Empty!</h3>
        ):(
        this.state.todoList.map((e, i) => {
          return (
            <TodoItem 
            e = {e}
            i = {i}
            updateItem = {this.updateItem}
            deleteItem = {this.deleteItem}
            />
          )
        }))}
      </div>
      </>
    )
  }
}