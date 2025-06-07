import {v4 as uuidv4} from 'uuid'

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
    title: '',
    inputElValue: '',
    updatingTodoId: 0,
    newTodoTitle: '',
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

  onAddingNewTodo = event => {
    this.setState({
      title: event.target.value,
      inputElValue: event.target.value,
    })
  }

  onClickingAddBtn = () => {
    const {title} = this.state
    const newTodo = {
      id: uuidv4(),
      title,
    }
    const inputArray = []
    const {inputElValue} = this.state
    for (let eachChar of inputElValue) {
      inputArray.push(eachChar)
    }
    const inputLength = inputArray.length
    // console.log(inputArray.slice(inputLength-2, inputLength))
    const lastButELement = inputArray.slice(inputLength - 2, inputLength - 1)
    //  console.log(lastButELment)
    const lastELement = inputArray.slice(inputLength - 1, inputLength)
    //  console.log(lastELment)
    //  console.log(inputArray.slice(inputLength-2, inputLength))
    const lastButELementConfirmation = typeof lastButELement === 'object'
    const lastELementConfirmation = typeof parseInt(lastELement) === 'number'
    if (lastButELementConfirmation && lastELementConfirmation) {
      for (let i = 0; i < lastELement; i++) {
        this.setState(prevState => ({
          updatedTodoList: [...prevState.updatedTodoList, newTodo],
          title: '',
          inputElValue: '',
        }))
      }
    }
    this.setState(prevState => ({
      updatedTodoList: [...prevState.updatedTodoList, newTodo],
      title: '',
      inputElValue: '',
    }))
  }

  updateTodoNewTitle = () => {
    const {updatingTodoId, newTodoTitle, updatedTodoList} = this.state
    // console.log(newTodoTitle)
    console.log(updatingTodoId)
    const isIdMatched = updatedTodoList.find(
      eachUserTodo => eachUserTodo.id === updatingTodoId,
    )

    if (isIdMatched) {
      this.setState({
        newTodoTitle,
      })
    }
  }

  getSpecificTodoId = id => {
    this.setState(
      {
        updatingTodoId: id,
      },
      this.updateTodoNewTitle(),
    )
  }

  getUpdatedTitle = updatedTitle => {
    this.setState(
      {
        newTodoTitle: updatedTitle,
      },
      this.updateTodoNewTitle(),
    )
  }

  render() {
    const {updatedTodoList, title, newTodoTitle, updatingTodoId} = this.state

    // console.log(title)
    // console.log(newTodoTitle)
    // console.log(updatedTodoList)
    return (
      <div className="bg-container">
        <div className="todos-container">
          <h1 className="todos-main-heading">Simple Todos</h1>
          <div className="input-element-add-container">
            <input
              type="text"
              className="input-element"
              placeholder="Add new Todo.."
              onChange={this.onAddingNewTodo}
              value={title}
            />
            <button
              type="button"
              className="add-btn"
              onClick={this.onClickingAddBtn}
            >
              Add
            </button>
          </div>
          <ul>
            {updatedTodoList.map(eachTodoList => (
              <TodoItem
                todoList={eachTodoList}
                key={eachTodoList.id}
                deleteTodo={this.deleteTodo}
                getUpdatedTitle={this.getUpdatedTitle}
                getSpecificTodoId={this.getSpecificTodoId}
                updateTodoNewTitle={this.updateTodoNewTitle}
                newTodoTitle={newTodoTitle}
                updatingTodoId={updatingTodoId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
