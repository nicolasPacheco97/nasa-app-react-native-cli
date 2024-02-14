import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Routes from './src/routes/Routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(7,26,93)',
    flex: 1,
  },
});

export default App;
