import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {SearchIcon} from '../../../../common/assets';
import styles from './styles';

export type Props = {
  searchText: string;
  search: (text: string) => any;
};

const SearchBar = ({searchText, search}: Props) => {
  //   const screen = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <SearchIcon />
      <TextInput
        onChangeText={text => search(text)}
        value={searchText}
        placeholder="Search"
        placeholderTextColor="#9B9B9B"
        style={styles.input}
      />
    </View>
  );
};

export default SearchBar;
