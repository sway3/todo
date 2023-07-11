import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 40px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};

  display: block;
  border: 1px solid black;
  border-radius: 7px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const Button = ({ children, type, width, color, background, onClick }) => {
  return (
    <StyledButton
      type={type}
      color={color}
      width={width}
      background={background}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
