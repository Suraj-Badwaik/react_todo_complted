import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import styles from "./todo.module.css";

const getListItems = () =>{
    let list = localStorage.getItem('list');

    if(list){
        return JSON.parse(localStorage.getItem('list'));
    }
    else{
        return [];
    }
}

const Todo = () => {
  const [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState(getListItems());

  const onDelete = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  useEffect(() => {
        localStorage.setItem("list",JSON.stringify(todos))
  }, [todos])
  
  return (
    <div>
      <div className={styles.firstDiv} >
        <button  className={styles.btn1}
            // disabled = {!newTodo}
          onClick={() => {


            // setTodos([...todos, { id: Date.now(), value: newTodo }]);
            // setTodo("");


            if(newTodo){
                setTodos([...todos, { id: Date.now(), value: newTodo }]);
                setTodo("");
            }
            else{
                alert("Nothing to add!")
            }
          }}
        >
          +
        </button>

        <input
          placeholder="Add a To-Do here"
          className={styles.inputBox}
          value={newTodo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      </div>

      <div className={styles.todoList}>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
