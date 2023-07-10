import {Text as tx, View} from 'react-native';
import React from 'react';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import {styled} from 'styled-components';

const RestaurantsInfoCard = ({restaurant = {}}) => {
  const {
    name = 'some restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{uri: photos[0]}} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantsInfoCard;

const RestaurantCard = styled(Card)`
  background-color: 'white';
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  ${'' /* color: ${props => props.theme.colors.ui.primary}; */}
`;