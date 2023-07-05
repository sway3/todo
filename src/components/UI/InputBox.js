import styled from "styled-components";

const StyledInputBox = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: 1px solid black;
  border-radius: 7px;
  padding: 0.5rem 1rem;
`;

const InputBox = ({ type, value, placeholder, onChange, width, height }) => {
  return (
    <StyledInputBox
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      width={width}
      height={height}
    />
  );
};

export default InputBox;
