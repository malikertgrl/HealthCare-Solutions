import {StyleSheet} from 'react-native';
import {Layout} from '../../../../common/constants';

const styles = StyleSheet.create({
  text: {fontSize: 15, fontWeight: '500', lineHeight: 38},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    backgroundColor: '#F8F8F6',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 14,
    height: (48 / 812) * Layout.windowHeight,
    width: (255 / 375) * Layout.windowWidth,
    paddingHorizontal: 20,
  },
  inputStyle: {marginLeft: 16},
  icon: {
    backgroundColor: '#E8FAEF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 11,
    borderRadius: 14,
  },
  timeText: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 38,
    marginLeft: 12,
  },
});

export default styles;
