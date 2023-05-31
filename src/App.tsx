import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Dashboard} from './Screens';
import {COLORS} from './helpers/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Dashboard />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GHOST_WHITE,
  },
});
export default App;
