import {StyleSheet} from 'react-native';
import {Layout} from '../../common/constants';

const styles = StyleSheet.create({
  goBack: {
    padding: 12,
    backgroundColor: '#F8F8F6',
    width: (48 / 375) * Layout.windowWidth,
    height: (48 / 812) * Layout.windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 28,
    paddingVertical: 28,
  },
  addPlanText: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 38,
    marginTop: (32 / 812) * Layout.windowHeight,
  },
  text: {
    marginTop: (20 / 812) * Layout.windowHeight,
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
  devicesNull: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  back: {position: 'absolute', zIndex: 999, top: 60, left: 20},
  icon: {padding: 10, backgroundColor: '#fff'},
});

export default styles;
