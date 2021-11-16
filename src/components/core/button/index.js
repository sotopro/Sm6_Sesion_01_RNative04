import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const Button = ({variant, label, onPress, disabled, maxWidth = width / 2}) => {
  const backgroundColor =
    variant === 'primary' && !disabled ? '#2CB9B0' : 'rgba(12,13,52, 0.15)';
  const color = variant === 'primary' ? '#ffffff' : '#0C0D34';
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, {backgroundColor, width: maxWidth}]}
      {...{onPress}}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    width: width / 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 15,
    textAlign: 'center',
  },
});
export default Button;
