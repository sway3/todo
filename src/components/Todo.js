import React from 'react';
import Button from './UI/Button';

import styled from 'styled-components';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const StyledDeleteIcon = styled(DeleteIcon)`
  display: inline-block;
  color: grey;
  font-size: 2rem;
  cursor: pointer;
`;

const StyledEditIcon = styled(EditIcon)`
  display: inline-block;
  color: grey;
  font-size: 2rem;
  cursor: pointer;
`;

const Info = styled.div`
  display: inline-block;
`;

const Todo = (props) => {
  return (
    <>
      <Info>
        <p>{props.date}</p>
        <h3>{props.title}</h3>
      </Info>
      <Info>
        <StyledEditIcon onClick={props.onEdit} />
        <StyledDeleteIcon onClick={props.onDelete} />
      </Info>
    </>
  );
};

export default Todo;
