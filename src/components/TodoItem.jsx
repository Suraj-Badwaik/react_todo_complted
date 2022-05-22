import React, { useState } from "react";
import styles from "./todo.module.css";

let compltedArray = JSON.parse(localStorage.getItem('completed')) || [];
console.log('compltedArray:', compltedArray)


const TodoItem = ({ todo, onDelete }) => {
  localStorage.setItem('completed', JSON.stringify(compltedArray));
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  return (
    <div className={styles.todo} key={todo.id}>
      <div>
        <input
          className={styles.input}
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => {
            setIsCompleted(e.target.checked);
            // compltedArray.pop()
            compltedArray.push(todo);
            // localStorage.setItem('completed', JSON.stringify(compltedArray));
          }}
        />
        <div>{todo.value}</div>
      </div>

      <div>
        <button className={styles.btn2} onClick={() => onDelete(todo.id)}>Remove Todo</button>
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png" />
      </div>
    </div>
  );
};

export default TodoItem;
