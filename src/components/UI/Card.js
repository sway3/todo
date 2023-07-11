import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: 1px solid black;
  border-radius: 7px;
  margin: 1rem 0 0 0;
  padding: 0.5rem 1rem;
`;

const Card = ({ children, width, height }) => {
  return (
    <StyledCard width={width} height={height}>
      {children}
    </StyledCard>
  );
};

export default Card;
