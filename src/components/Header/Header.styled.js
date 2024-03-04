import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  background-color: gray;
  gap: 25px;
  margin-bottom: 30px;
  border: 2px solid blanchedalmond;
  border-radius:6px;
  
  .header {
    color: black;
    
  }
  .header-link {
    text-decoration: none;
    color: black;
    font-size: 20px;

    &:hover {
      color: white;
    }

    &.active {
      background-color: #fff;
      color: #000;
      border-radius: 6px;
      padding: 2px 4px;
    }
  }
`;
