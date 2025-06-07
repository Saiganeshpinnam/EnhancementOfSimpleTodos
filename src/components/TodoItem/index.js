// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteTodo} = props
  const {title, id} = initialTodosList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="eachTodoItem">
      <p className="todo-title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
