import './components/todo.css';
import TodoNew from './components/TodoNew';
import TodoData from './components/TodoData';
import reactLogo from './assets/react.svg';

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'></img>
      </div>
    </div>
  )
}

export default App
