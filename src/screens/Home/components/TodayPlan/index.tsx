import {View} from 'react-native';
import React from 'react';
import {Flamenco} from '../../../../common/assets';
import {Layout} from '../../../../common/constants';
import CustomText from '../CustomText';
import styles from './styles';

const TodayPlan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <CustomText style={styles.hello}>Hello,</CustomText>
        <CustomText style={styles.name}>Kathryn</CustomText>

        <View style={styles.box}>
          <View style={styles.mrgn24}>
            <CustomText style={styles.uplan}>
              Your plan{'\n'}for today
            </CustomText>
            <CustomText style={styles.completed}>1 of 4 completed</CustomText>
            <View style={styles.showMoreBorder}>
              <CustomText style={styles.showMoreText}>Show More</CustomText>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.image}>
        <Flamenco />
      </View>
    </View>
  );
};

export default TodayPlan;
