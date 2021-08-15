import {Dimensions, StatusBar, Platform} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const sizes = {
    Width_Window: Dimensions.get('window').width,
    Height_Window: Dimensions.get('window').height,
    Height_Screen: Dimensions.get('screen').height,
    Height_StatusBar: Platform.OS === 'ios'?getStatusBarHeight():StatusBar.currentHeight,
    Height_SoftMenuBar: Dimensions.get('screen').height === Dimensions.get('window').height ? 0 : Dimensions.get('screen').height - Dimensions.get('window').height - StatusBar.currentHeight,
};
