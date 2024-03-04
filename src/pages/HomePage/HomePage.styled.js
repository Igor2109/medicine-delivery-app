import styled from 'styled-components';

export const StyledHomePage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 15px;
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    padding-top: 15px;
  }
  .left-title {
    margin-bottom: 10px;
    font-size: 20px;
  }
  .shops-list {
  }
  .shops-list-item {
    margin-bottom: 10px;
  }
  .list-item-btn {
    border: none;
    background-color: beige;
    padding: 8px 6px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 250ms ease-in;
  }

  .list-item-btn:hover {
    transform: scale(1.1);
    border-color: blanchedalmond;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 14px 38px,
      rgba(0, 0, 0, 0.22) 0px 10px 30px;
    transition: all 0.3s ease-in-out;
  }
  .right {
    border: 2px solid black;
  }
  .empty-cart {
    font-size: 25px;
    display: flex;
    justify-content: center;
    margin-top: 15px;
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

  .medicine-title {
    padding: 4px 0;
  }
  .add-to-cart-btn {
    border: none;
    background-color: beige;
    padding: 8px 6px;
    border-radius: 10px;
    width: 90%;
    cursor: pointer;
    transition: all 250ms ease-in;
  }

  .add-to-cart-btn:hover {
    transform: scale(1.1);
    border-color: blanchedalmond;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 14px 38px,
      rgba(0, 0, 0, 0.22) 0px 10px 30px;
    transition: all 0.3s ease-in-out;
  }
`;
