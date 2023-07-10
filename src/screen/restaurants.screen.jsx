import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {styled} from 'styled-components';

import RestaurantsInfoCard from '../components/restaurants-info-card.component';
const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantsInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: 16px;
`;
