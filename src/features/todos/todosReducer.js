const initialState = {
  items: [],
};

const todosReducer = (state = initialState, action) => {
  if (action.type === "todos/addTodo") {
    return {
      ...state,
      items: [
        ...state.items,
        { id: state.items.length + 1, text: action.payload, done: false },
      ],
    };
  }

  if (action.type === "todos/removeTodo") {
    const updatedTodos = state.items.filter(
      (todo) => todo.id !== action.payload
    );
    return {
      ...state,
      items: updatedTodos,
    };
  }

  if (action.type === "todos/toggleDone") {
    const updatedTodos = state.items.map((todo) => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });

    return {
      ...state,
      items: updatedTodos,
    };
  }

  return state;
};

export const selectTodos = (state) => state.todos.items;

export default todosReducer;
