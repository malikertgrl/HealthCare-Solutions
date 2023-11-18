import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  dailyReviewText: {fontSize: 17, fontWeight: '500', lineHeight: 38},
  title: {fontSize: 15, fontWeight: '500'},
  time: {fontSize: 15, fontWeight: '500', color: '#9B9B9B'},
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F6',
    marginTop: 12,
    borderRadius: 24,
    paddingHorizontal: 28,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  review: {flex: 1, paddingBottom: 20},
  flex: {flex: 1},
});

export default styles;
