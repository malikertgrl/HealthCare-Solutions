import {
  Alert,
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
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
  amount?: number;
  days?: number;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setAmount?: React.Dispatch<React.SetStateAction<number>>;
  setDays?: React.Dispatch<React.SetStateAction<number>>;
  data: number[];
};

const CustomDropDown = ({
  dropText,
  havePills,
  amount,
  modal,
  setModal,
  setAmount,
  data,
}: Props) => {
  const onPress = () => {
    setModal(prevState => !prevState);
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.innerDrop}>
          {havePills ? <TwoPills /> : <CalenderIcon />}
          <CustomText style={styles.textStyle}>{dropText}</CustomText>
        </View>
        <View style={styles.dropStyle}>
          <CustomText>{amount} </CustomText>

          <TouchableOpacity onPress={() => onPress()}>
            <Drop />
          </TouchableOpacity>
        </View>
      </View>
      {modal && (
        <View style={styles.dropWiew}>
          {data.map(item => (
            <TouchableOpacity
              onPress={() => {
                setAmount(item);
                setModal(false);
              }}>
              <View style={styles.text}>
                <CustomText>{item}</CustomText>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomDropDown;
