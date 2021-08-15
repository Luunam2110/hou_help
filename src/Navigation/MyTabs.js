import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useFocusEffect} from "@react-navigation/native";
import * as React from "react";
import {moderateVerticalScale,scale,verticalScale,moderateScale} from "react-native-size-matters";
import Index from "../Container/Index";
import Profile from "../Container/Profile/index";
import Utilities from "../Container/Utilities";
import Icon from "../Component/Icon/icon";
import {EditImage, Previous} from "../Redux/Actions/FormControlAction";
import {connect} from "react-redux";

const Tab = createBottomTabNavigator();



function MyTabs ({MoveScreen,editImage}){
    useFocusEffect(
        React.useCallback(() => {
            MoveScreen(1);
            editImage([])
        }, [])
    );
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#2685DD",
                inactiveTintColor: "#C0C0C0",
                showLabel: false,
                tabStyle: {
                    height: verticalScale(46),
                },
                style: {
                    backgroundColor: 'transparent',
                    // position: "absolute",
                    height: moderateVerticalScale(50, 0.5),
                    borderTopWidth: 0,
                    marginHorizontal: scale(80),
                    marginBottom: verticalScale(5),
                    paddingHorizontal: scale(10),
                    borderRadius: verticalScale(25),
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderColor: 'transparent',
                    elevation: 0,
                },
            }}>
            <Tab.Screen name="Home" component={Index} options={{
                tabBarLabel: 'Trang chủ',
                tabBarIcon: ({color, focused}) => (
                    <Icon name={'home'} type={'Feather'}
                          color={color}
                          size={focused ? moderateScale(25, 0.5) : moderateScale(20,0.5)}/>
                ),
            }}
            />
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarLabel: 'Cá nhân',
                tabBarIcon: ({color,focused}) => (
                    <Icon name={'person'} type={'MaterialIcons'}
                          color={color}
                          size={focused ? moderateScale(30, 0.5) : moderateScale(25, 0.5)}/>
                ),
            }}
            />

            <Tab.Screen name="Utilities" component={Utilities} options={{
                tabBarLabel: 'Tác vụ',
                tabBarIcon: ({color,focused}) => (
                    <Icon name={'layout'} type={'Feather'}
                          color={color}
                          size={focused ? moderateScale(25, 0.5) : moderateScale(20, 0.5)}/>
                ),
            }}
            />

        </Tab.Navigator>
    );
}
const mapDispatchToProps = dispatch => ({
    MoveScreen: (index) => dispatch(Previous(index)),
    editImage:(uri)=> dispatch(EditImage(uri))
});

export default connect(null ,mapDispatchToProps)(MyTabs);
