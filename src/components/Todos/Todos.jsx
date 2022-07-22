import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectTodos } from "../../features/todos/todosReducer";
import {
  addTodoAction,
  removeTodoAction,
  toggleDoneTodoAction,
} from "../../features/todos/todosActions";

import styles from "./Todos.module.css";
import { useState } from "react";

const Todos = () => {
  const [text, setText] = useState("");
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <div className={styles.todos}>
      <h2>Todos Redux Example</h2>
      <hr />
      <div className={styles["input-group"]}>
        <input
          type="text"
          value={text}
          placeholder="Enter your todo text here"
          onChange={(event) => setText(event.target.value)}
        />
        <button
          onClick={() => {
            const validText = text.trim();
            if (validText) {
              dispatch(addTodoAction(text));
              setText("");
            }
          }}
        >
          Add
        </button>
      </div>
      <hr />
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={todo.done ? styles.done : ""}
              onClick={() => dispatch(toggleDoneTodoAction(todo.id))}
            >
              <span>{todo.text}</span>
              <button onClick={() => dispatch(removeTodoAction(todo.id))}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
