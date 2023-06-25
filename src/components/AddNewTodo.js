import React, { useState } from 'react';

const AddNewTodo = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const desChangeHandler = (event) => {
        setDescription(event.target.value);
    };

    const todoSubmitHandler = (event) => {
        event.preventDefault();

        const TODO = {
            id: Math.random().toString(),
            title: title,
            description: description
        };

        props.onAddTodo(TODO);

        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <form onSubmit={todoSubmitHandler}>
                <input type='text' placeholder='Title' onChange={titleChangeHandler} />
                <input type='description' placeholder='Description' onChange={desChangeHandler} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddNewTodo;