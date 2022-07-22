export const addTodoAction = (text) => {
  return {
    type: "todos/addTodo",
    payload: text,
  };
};

export const removeTodoAction = (id) => {
  return {
    type: "todos/removeTodo",
    payload: id,
  };
};

export const toggleDoneTodoAction = (id) => {
  return {
    type: "todos/toggleDone",
    payload: id,
  };
};
