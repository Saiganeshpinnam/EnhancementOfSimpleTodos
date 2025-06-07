import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    updatedTodoList: initialTodosList,
  }

  deleteTodo = id => {
    const {updatedTodoList} = this.state
    const filteredTodoList = updatedTodoList.filter(
      eachTodo => eachTodo.id !== id,
    )
    this.setState({
      updatedTodoList: filteredTodoList,
    })
  }

  render() {
    const {updatedTodoList} = this.state
    return (
      <div className="bg-container">
        <div className="todos-container">
          <h1 className="todos-main-heading">Simple Todos</h1>
          <ul>
            {updatedTodoList.map(eachTodoList => (
              <TodoItem
                initialTodosList={eachTodoList}
                key={eachTodoList.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
