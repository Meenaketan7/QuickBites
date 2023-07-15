import {styled} from 'styled-components';

import {StatusBar, SafeAreaView, Platform} from 'react-native';
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
`;
