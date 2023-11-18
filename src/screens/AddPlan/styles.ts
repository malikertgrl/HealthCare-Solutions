import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  goBack: {
    padding: 12,
    backgroundColor: '#F8F8F6',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 28,
    paddingTop: 28,
  },
  addPlanText: {fontSize: 28, fontWeight: '600', lineHeight: 38, marginTop: 32},
  text: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 38,
  },
  textPillsName: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 38,
  },
  grow: {flexGrow: 1},
  mrgnT4: {marginTop: 4},
  drop: {
    marginTop: 4,
    flexDirection: 'row',
    gap: 16,
  },
  food: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default styles;
