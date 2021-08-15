import React, {useState} from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackComponent,
    View,
    TouchableOpacity
} from "react-native";
import styles from './style';
import {EditImage, Previous} from "../../Redux/Actions/FormControlAction";
import connect from "react-redux/lib/connect/connect";
import FormReducer from "../../Redux/Recuders/FormControl";



function TabTopForm({presentScreen,MoveScreen}) {
    const Index=presentScreen;
    const List=[
        1,2,3
    ]
    return (
        <View style={styles.containerHeader}>
            <View style ={styles.Line}>
            </View>
            {List.map((route, index) => {
                const isFocused = route <= Index;
                return (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            if (index <Index)
                                MoveScreen(index+1);
                        }}
                        key={route}
                    >
                        <View style={[styles.Text ,{backgroundColor:isFocused ? '#2685DD' : '#fff'}]}>
                        <Text style={{color: isFocused ? '#fff' : '#2685DD' }}>
                            {route}
                        </Text>
                        </View>
                    </TouchableWithoutFeedback>
                );
            })}
        </View>
    );
}
const mapDispatchToProps = dispatch => ({
    MoveScreen: (index) => dispatch(Previous(index)),
    clearImage:()=>dispatch(EditImage([]))
});

function mapStateToProps(state) {
    return {
        presentScreen: state.FormReducer.present_step
    }
}

export default connect(mapStateToProps ,mapDispatchToProps)(TabTopForm)