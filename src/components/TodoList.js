import Todo from './Todo';

const TodoList = (props) => {
    const todos = props.dataSet;

    return (
        <div>
            {todos.map(todo => {
                return <Todo key={todo.id} title={todo.title} description={todo.description} />
            })}
        </div>
    );
};

export default TodoList;