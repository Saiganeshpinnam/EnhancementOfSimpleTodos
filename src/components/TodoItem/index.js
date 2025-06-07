// Write your code here
import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  state = {
    activateEditOption: false,
    isCheckboxClicked: false,
    applyCompletionStatus: '',
    negateSelectionOfCheckbox : ''
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
    const selectedTodoCheckbox = todoList.id === id
    const applyCompletedTodoStatus = selectedTodoCheckbox
      ? 'apply-completion-status'
      : ''
    this.setState(prevState => ({
      isCheckboxClicked: !prevState.isCheckboxClicked,
      applyCompletionStatus: applyCompletedTodoStatus,
      negateSelectionOfCheckbox : !
    }))
  }

  render() {
    const {activateEditOption, applyCompletionStatus} = this.state
    const {todoList, newTodoTitle, updatingTodoId} = this.props
    //  console.log(todoList.id)
    const {title, id} = todoList

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
