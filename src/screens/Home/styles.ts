import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFF'},
  search: {margin: 28},
  content: {flex: 1, marginHorizontal: 28, marginTop: 20},
  dailyReviewText: {fontSize: 17, fontWeight: '500', lineHeight: 38},
  empty: {
    fontSize: 35,
    fontWeight: '300',
    lineHeight: 38,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
