import styled from 'styled-components';

export const SearchbarContainer = styled.div`
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const SearchForm = styled.form`
  display: block;
  padding: 10px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  align-items: center;
`;

export const SearchFormButton = styled.button`
  width: 40px;
  height: 40px;
  margin-right: 3px;
  display: inline-block;
  border: thick double rgb(85, 122, 149);
  background-size: 40%;
  border-radius: 30px;
  background-color: rgb(115, 149, 174);
  color: rgb(255, 255, 255);
  background-position: center;
  cursor: pointer;
  outline: none;
  transition: box-shadow 150ms cubic-bezier(0.3, 0, 0.2, 1);

  :hover {
    box-shadow: rgb(85, 122, 149) 0px 5px 15px 0px;
  }
`;

export const SearchFormButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

export const SearchFormInput = styled.input`
  outline: rgb(177, 162, 150);
  border: none;
  border: thick double rgb(85, 122, 149);
  box-sizing: border-box;
  padding: 15px;
  width: 170px;
  height: 40px;
  border-radius: 30px;
  background-color: rgb(115, 149, 174);
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-style: italic;
  font-family: Comic Sans MS, Comic Sans, cursive;
  transition: box-shadow 150ms cubic-bezier(0.3, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: rgb(85, 122, 149) 0px 5px 15px 0px;
  }
`;
