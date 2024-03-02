import styled from 'styled-components';

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  .left {
  }
  .left-title {
  }
  .shops-list {
  }
  .shops-list-item {
  }
  .list-item-btn {
  }
  .right {
  }
  .medicines-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
  }
  .medicine-list-item {
  }
  .add-to-cart-btn {
  }
`;
