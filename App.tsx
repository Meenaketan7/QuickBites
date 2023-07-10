import React, {useState} from 'react';

import {StatusBar, StyleSheet, SafeAreaView, Text, View} from 'react-native';
import RestaurantsScreen from './src/screen/restaurants.screen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme/index';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({});
