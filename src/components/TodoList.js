import Todo from "./Todo";

const TodoList = (props) => {
  const todos = props.dataSet;

  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            title={todo.title}
            date={todo.date}
            onDelete={() => props.onRemoveTodo(todo.id)}
            onEdit={() => props.onEditTodo(todo.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
