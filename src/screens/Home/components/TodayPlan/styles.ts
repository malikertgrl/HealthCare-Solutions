import {StyleSheet} from 'react-native';
import {Layout} from '../../../../common/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {marginHorizontal: 28},
  hello: {
    color: '#0A0909',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 38,
  },
  name: {
    color: '#0A0909',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 38,
  },
  box: {
    height: (180 / 812) * Layout.windowHeight,
    backgroundColor: '#F3F6C8',
    width: (319 / 375) * Layout.windowWidth,
    borderRadius: 28,
    marginTop: 16,
  },
  mrgn24: {margin: 24},
  uplan: {
    color: '#0A0909',
    fontSize: 18,
    fontWeight: '600',
  },
  completed: {
    color: '#000',
    fontSize: 11,
    fontWeight: '400',
    opacity: 0.4,
  },
  showMoreBorder: {
    borderBottomWidth: 1,
    width: (80 / 375) * Layout.windowWidth,
    borderBottomColor: '#EC7669',
    marginTop: 31,
    alignItems: 'center',
  },
  showMoreText: {
    color: '#EC7669',
    fontSize: 13,
    fontWeight: '600',
  },
  image: {position: 'absolute', right: 0},
});

export default styles;
