import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../CustomText';
import styles from './styles';
import {useAppSelector} from '../../../../redux/hooks';
import {ArrowLight, Pills} from '../../../../common/assets';
import {PillsModel} from '../../../../redux/slices/healthSolutionSlice';

export type Props = {
  data: PillsModel[];
};

const DailyReview = ({data}: Props) => {
  const renderItem = ({item}) => (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Pills />
        <View>
          <CustomText style={styles.title}>{item.name}</CustomText>

          <CustomText style={styles.time}>
            {item.time} . {item.completed}
          </CustomText>
        </View>
      </View>
      <ArrowLight />
    </View>
  );

  return (
    <View style={styles.review}>
      <CustomText style={styles.dailyReviewText}>Daily Review</CustomText>
      <FlatList
        data={data}
        renderItem={renderItem}
        style={styles.flex}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DailyReview;
