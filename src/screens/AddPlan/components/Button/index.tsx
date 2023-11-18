import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../../../Home/components/CustomText';
import styles from './styles';

export type Props = {
  title: string;
  onPress: () => void;
};

const Button = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <CustomText style={styles.text}>{title} </CustomText>
    </TouchableOpacity>
  );
};

export default Button;
