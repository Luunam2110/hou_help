import {ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

// đổ bóng shadow cho một đối tượng
export const SHADOW_7: ViewStyle = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: moderateScale(4, 1),
    },
    shadowOpacity: 0.30,
    shadowRadius: moderateScale(4.65, 1),

    elevation: 7,
};

export const SHADOW_5: ViewStyle = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: moderateScale(3,1),
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(3.65,1),

    elevation: 5,
};

export const SHADOW_3: ViewStyle = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: moderateScale(2,1),
    },
    shadowOpacity: 0.2,
    shadowRadius: moderateScale(2.22,1),

    elevation: 3,
};

export const SHADOW_2: ViewStyle = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: moderateScale(2,1),
    },
    shadowOpacity: 0.15,
    shadowRadius: moderateScale(1.41,1),

    elevation: 2,
};

// custom hàng căn giữa trục y
export const ROW_LEFT: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
}

// custom hàng căn giữa 2 trục
export const ROW_CENTER: ViewStyle = {
    ...ROW_LEFT,
    justifyContent: 'center',
}

// custom cột căn giữa 2 trục
export const COLUMN_CENTER: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
}
