import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  thumbnailContainer: {
    padding: 5,
    marginHorizontal: 5,
  },
  thumbnail: {
    resizeMode: 'contain',
    width: wp(10),
    height: wp(10),
  },
  thumbnailContainerActive: {
    borderWidth: 1,
    borderColor: '#404040',
  },
});
