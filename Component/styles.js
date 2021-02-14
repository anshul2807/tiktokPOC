import {StyleSheet, Dimensions} from 'react-native';
import { abs } from 'react-native-reanimated';

const  styles = StyleSheet.create({
    container: {
      width: '100%',
      height: Dimensions.get('window').height,
    //   backgroundColor: 'white',
    },
    video:
    {
        position:'absolute',
        top: 0,
    left: 0,
    bottom: 0,
    right: 0,
        width: '100%',
      height: 500 ,
    }
}
)
export default styles;