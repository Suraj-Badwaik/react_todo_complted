
import './App.css';
import Todo from './components/Todo';
import CompletedTodos from './components/CompletedTodos';

function App() {
  return (
    <>
    <h1>Todo</h1>
    <div className="App">
      <Todo />
      <CompletedTodos />
    </div>
    </>
  );
}

export default App;
