import React, { useState } from "react";
import styles from "./completed.module.css";

let completedTodo = JSON.parse(localStorage.getItem("completed")) || [];

const CompletedTodos = () => {
  
  return (
    <div>
      <button className={styles.showComplted}>Show Completed Todos</button>
    </div>
  );
};

export default CompletedTodos;
