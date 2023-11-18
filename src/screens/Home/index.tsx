import {SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useReducer, useState} from 'react';
import SearchBar from './components/SearchBar';
import styles from './styles';
import TodayPlan from './components/TodayPlan';
import DailyReview from './components/DailyReview';

import Hooks from './hooks';
import CustomText from './components/CustomText';

const Home = () => {
  const {searchText, list, onSearch} = Hooks();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar searchText={searchText} search={onSearch} />
      </View>
      <TodayPlan />

      <View style={styles.content}>
        <CustomText style={styles.dailyReviewText}>Daily Review</CustomText>
        {list?.length === 0 ? (
          <View style={styles.emptyContainer}>
            <CustomText style={styles.empty}>Empty, lets go..</CustomText>
          </View>
        ) : (
          <DailyReview data={list} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
