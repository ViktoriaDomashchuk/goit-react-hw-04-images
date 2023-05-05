import styled from 'styled-components';

export const ImageGalleryItems = styled.li`
  border-radius: 2px;

  :hover {
    box-shadow: 0px 0px 46px 2px rgb(85, 122, 149);
  }
`;

export const ImageGalleryItemImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;
