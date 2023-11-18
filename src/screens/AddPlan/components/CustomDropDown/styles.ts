import {StyleSheet} from 'react-native';
import {Layout} from '../../../../common/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F6',
    borderRadius: 14,
    paddingVertical: 5,
  },
  textStyle: {
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 38,
    marginLeft: 10,
    marginRight: 33,
  },
  innerDrop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 17,
  },
  dropStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  dropBox: {
    width: (151 / 375) * Layout.windowWidth,
    height: 100,
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 999,
    backGroundColor: 'red',
    top: 48,
  },
  dropWiew: {
    width: '100%',
    backgroundColor: '#F8F8F6',
    zIndex: 99,
    position: 'absolute',
    top: 30,
  },
  text: {borderBottomWidth: 1, padding: 2, borderColor: '#fff'},
});

export default styles;
