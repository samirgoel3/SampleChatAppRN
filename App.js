
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar, useColorScheme,
  View
} from 'react-native';
import Sample from './src/images/sample.svg';

import {
  Colors, Header
} from 'react-native/Libraries/NewAppScreen';


const App= () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
         
         <Sample width={500} height={500}/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
