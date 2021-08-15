import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from '../Icon/icon';
import {moderateScale} from 'react-native-size-matters';
import style from './style';

function Header({title, navigation,color, sizeText,iconName,iconType,iconNavigation}) {
    const styles = style(color);
    return (
        <View style={styles.viewHeader_fixed}>
            <TouchableOpacity style={styles.buttonBack_fixed} onPress={() => navigation.goBack(null)}>
                <Icon type={'MaterialIcons'} name="keyboard-arrow-left" size={moderateScale(30, 0.3)}
                      color="#004c92"/>
            </TouchableOpacity>
            <Text allowFontScaling={false} style={[styles.textHeader_fixed,{fontSize:sizeText}]}>{title}</Text>
            <TouchableOpacity 
                              onPress={() => navigation.navigate(iconNavigation)}>
                <Icon name={iconName} type={iconType} size={moderateScale(25, 0.3)} color='#004c92'
                />
            </TouchableOpacity>
        </View>
    );

}

export default Header;
