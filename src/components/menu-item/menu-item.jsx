import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  BackgroundImageContainer,
  MenuItemContainer,
  ContentContainer,
  TitleContainer,
  SubTitleContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <TitleContainer>{title}</TitleContainer>
        <SubTitleContainer>SHOP NOW</SubTitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem); //give as access to location history match
