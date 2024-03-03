import styled from 'styled-components';

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  padding: 0 15px;
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .left-title {
    margin-bottom: 10px;
  }
  .shops-list {
  }
  .shops-list-item {
    margin-bottom: 10px;
  }
  .list-item-btn {
    border: none;
    background-color: burlywood;
    padding: 8px 6px;
    border-radius: 10px;
  }
  .right {
  }
  .medicines-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
  }
  .medicine-list-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .add-to-cart-btn {
    border: none;
    background-color: burlywood;
    padding: 8px 6px;
    border-radius: 10px;
    width: 120px;
  }
`;
