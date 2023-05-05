import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  display: block;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  height: 35px;
  width: 100px;
  border: thick double rgb(85, 122, 149);
  border-radius: 30px;
  background-color: rgb(115, 149, 174);
  color: rgb(255, 255, 255);
  text-transform: capitalize;
  font-size: 10px;
  font-family: Comic Sans MS, Comic Sans, cursive;
  font-weight: 500;

  :hover,
  :focus {
    box-shadow: rgb(85, 122, 149) 0px 5px 15px 0px;
  }
`;
