// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {
    activateEditOption: false,
    selectedTodoCheckbox: false,
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

  onClickingCheckbox = id => {
    const {applyCompletionStatus} = this.state
    const {todoList} = this.props

    if (todoList.id === id) {
      this.setState(prevState => ({
        selectedTodoCheckbox: !prevState.selectedTodoCheckbox,
      }))
    }
  }

  render() {
    const {activateEditOption, selectedTodoCheckbox} = this.state

    const {todoList, newTodoTitle, updatingTodoId} = this.props
    const {title, id} = todoList

    const applyCompletionStatus = selectedTodoCheckbox
      ? 'apply-completion-status'
      : ''

    return (
      <li className="eachTodoItem">
        <input
          type="checkbox"
          className="checkbox-input"
          onClick={() => this.onClickingCheckbox(id)}
        />
        <div className="title-edit-container">
          {activateEditOption ? (
            <input
              type="text"
              className="todo-title"
              onChange={this.onEditingTitle}
              value={title}
            />
          ) : (
            <>
              {todoList.id === updatingTodoId ? (
                <p className={`todo-title ${applyCompletionStatus}`}>
                  {newTodoTitle}
                </p>
              ) : (
                <p className={`todo-title ${applyCompletionStatus}`}>{title}</p>
              )}
            </>
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
