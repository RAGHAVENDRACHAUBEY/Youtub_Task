import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect} from 'react';
import {myColors} from '../utils/Theme';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 4000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} hidden />
      <Image source={require('../assets/download.jpg')} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 100,
    backgroundColor: 'rgb(16 16 16)',
  },
});
