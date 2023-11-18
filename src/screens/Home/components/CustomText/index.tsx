import {Text, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';

export type Props = {
  children: any;
  style?: TextStyle;
};

const CustomText = ({children, style}: Props) => {
  return <Text style={[styles.defaultStyle, {...style}]}>{children} </Text>;
};

export default CustomText;
