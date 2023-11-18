import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Pills, Qr} from '../../../../common/assets';
import styles from './styles';
import CustomText from '../../../Home/components/CustomText';
export type Props = {
  onPress: () => void;
  pillName: string;
  setPillName: React.Dispatch<React.SetStateAction<string>>;
};

const Pill = ({onPress, pillName, setPillName}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inner}>
          <Pills />

          <TextInput
            value={pillName}
            onChangeText={val => setPillName(val)}
            placeholder="Pill Name..."
            style={{marginLeft: 12}}
          />
        </View>
        <TouchableOpacity onPress={onPress}>
          <Qr />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Pill;
