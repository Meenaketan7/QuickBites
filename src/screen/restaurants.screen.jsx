import {FlatList} from 'react-native';
import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import {styled} from 'styled-components';
import {SafeArea} from '../components/safe-area.components';
import RestaurantsInfoCard from '../components/restaurants-info-card.component';
import {Spacer} from '../components/spacer.componet';
const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantListContainer>
          <FlatList
            data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}, {name: 5}]}
            renderItem={() => (
              <Spacer position="bottom" size="large">
                <RestaurantsInfoCard />
              </Spacer>
            )}
            keyExtractor={item => item.name.toString()}
          />
        </RestaurantListContainer>
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantsScreen;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 5,
  },
})``;
