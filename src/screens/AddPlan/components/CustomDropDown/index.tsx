import {Alert, Touchable, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  CalenderActive,
  CalenderIcon,
  Drop,
  TwoPills,
} from '../../../../common/assets';
import CustomText from '../../../Home/components/CustomText';
import styles from './styles';

export type Props = {
  dropText: string;
  havePills?: boolean;
  amount: number;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomDropDown = ({
  dropText,
  havePills,
  amount,
  modal,
  setModal,
}: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.innerDrop}>
          {havePills ? <TwoPills /> : <CalenderIcon />}
          <CustomText style={styles.textStyle}>{dropText}</CustomText>
        </View>
        <View style={styles.dropStyle}>
          <CustomText>{amount} </CustomText>
          <TouchableOpacity onPress={() => setModal(prevState => !prevState)}>
            <Drop />
          </TouchableOpacity>
        </View>
      </View>
      {modal && <View></View>}
    </View>
  );
};

export default CustomDropDown;
