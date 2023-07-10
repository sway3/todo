import React from 'react';
import Button from './UI/Button';

import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const StyledDeleteIcon = styled(DeleteIcon)`
  color: grey;
  font-size: 2rem;
  cursor: pointer;
`;

const StyledEditIcon = styled(EditIcon)`
  color: grey;
  font-size: 2rem;
  cursor: pointer;
`;

const Todo = (props) => {
  return (
    <>
      <p>{props.date}</p>
      <h3>{props.title}</h3>
      <StyledEditIcon onClick={props.onEdit} />
      <StyledDeleteIcon onClick={props.onDelete} />
    </>
  );
};

export default Todo;
