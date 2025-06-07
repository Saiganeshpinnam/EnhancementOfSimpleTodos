// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {
    activateEditOption: false,
    newTodoTitle: '',
  }

  onDelete = id => {
    const {deleteTodo} = this.props
    deleteTodo(id)
  }

  onSaving = () => {
    const {updateTodoNewTitle} = this.props
    updateTodoNewTitle()
    this.setState({
      activateEditOption: false,
    })
  }

  onEditing = id => {
    const {getSpecificTodoId} = this.props
    getSpecificTodoId(id)
    this.setState({
      activateEditOption: true,
    })
  }

  onEditingTitle = event => {
    const {getUpdatedTitle} = this.props
    getUpdatedTitle(event.target.value)
  }

  render() {
    const {activateEditOption} = this.state
    const {initialTodosList} = this.props
    const {title, id} = initialTodosList
    return (
      <li className="eachTodoItem">
        <div className="title-edit-container">
          {activateEditOption ? (
            <input
              type="text"
              className="todo-title"
              onChange={this.onEditingTitle}
            />
          ) : (
            <p className="todo-title">{title}</p>
          )}
          {activateEditOption ? (
            <button
              type="button"
              className="delete-btn"
              onClick={this.onSaving}
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className="delete-btn"
              onClick={() => this.onEditing(id)}
            >
              Edit
            </button>
          )}
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={() => this.onDelete(id)}
        >
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
