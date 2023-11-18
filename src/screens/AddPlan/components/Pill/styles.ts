import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'ios' ? 16 : 0,
    backgroundColor: '#F8F8F6',
    paddingHorizontal: 18,
    borderRadius: 14,
    justifyContent: 'space-between',
  },
  inner: {flexDirection: 'row', alignItems: 'center'},
  text: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 38,
    marginLeft: 15,
  },
});

export default styles;
