import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {AddPlanIcon, Notification} from '../../../../common/assets';
import CustomText from '../../../Home/components/CustomText';
import styles from './styles';

export type Props = {
  onPress?: () => any;
  time: string;
};

const SetTime = ({onPress, time}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.time}>
        <Notification />
        <CustomText style={styles.timeText}>{time}</CustomText>
      </View>
      <TouchableOpacity style={styles.icon} onPress={onPress}>
        <AddPlanIcon fill={'#1BD15D'} />
      </TouchableOpacity>
    </View>
  );
};

export default SetTime;
