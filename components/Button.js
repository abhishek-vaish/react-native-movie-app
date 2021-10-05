import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {primaryColor, white} from '../constants';

const Button = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...props.style,
        backgroundColor: `${primaryColor}`,
        width: 200,
        height: 50,
        justifyContent: 'center',
        borderRadius: 5,
      }}
      onPress={props.onPress}>
      <Text style={{color: `${white}`, textAlign: 'center', fontSize: 16}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
