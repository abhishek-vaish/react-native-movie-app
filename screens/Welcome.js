import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Button from '../components/Button';
import {Logo, primaryColor, white} from '../constants';
import {Splash} from '../constants/images';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Background Screen */}
      <View style={styles.background}>
        <Image source={Splash} resizeMode="contain" />
        <View style={styles.overlayScreen} />
      </View>

      <Image source={Logo} style={{width: 200, height: 45}} />
      <Text style={styles.subheading}>Just relax and watch Movve.</Text>
      <Button
        style={{position: 'absolute', bottom: 30}}
        title="Get Started"
        onPress={() => navigation.replace('Login')}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  subheading: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '500',
    color: white,
  },
  background: {
    position: 'absolute',
    zIndex: -1,
  },
  overlayScreen: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#000',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0.5,
  },
});
