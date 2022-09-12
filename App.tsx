import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';

// router
import RootNavigation from './src/router';

export default function App() {
  return (
    <NativeBaseProvider>
      <RootNavigation />
    </NativeBaseProvider>
  );
}
