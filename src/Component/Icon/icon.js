import React, {Component} from 'react';
import {AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Foundation,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    Octicons,
    Zocial,
    SimpleLineIcons
} from '@expo/vector-icons';


export default class Icon extends Component{

    constructor(props){
        super(props)
    };

    render(){
        let icon;
        let props = this.props;
        switch (props.type) {
            case 'AntDesign':
                icon = <AntDesign {...props}/>;
                break;
            case 'Entypo':
                icon = <Entypo {...props}/>;
                break;
            case 'EvilIcons':
                icon = <EvilIcons {...props}/>;
                break;
            case 'Feather':
                icon = <Feather {...props}/>;
                break;
            case 'FontAwesome':
                icon = <FontAwesome {...props}/>;
                break;
            case 'FontAwesome5':
                icon = <FontAwesome5 {...props}/>;
                break;
            case 'Fontisto':
                icon = <Fontisto {...props}/>;
                break;
            case 'Foundation':
                icon = <Foundation {...props}/>;
                break;
            case 'Ionicons':
                icon = <Ionicons {...props}/>;
                break;
            case 'MaterialIcons':
                icon = <MaterialIcons {...props}/>;
                break;
            case 'MaterialCommunityIcons':
                icon = <MaterialCommunityIcons {...props}/>;
                break;
            case 'Octicons':
                icon = <Octicons {...props}/>;
                break;
            case 'Zocial':
                icon = <Zocial {...props}/>;
                break;
            case 'SimpleLineIcons':
                icon = <SimpleLineIcons {...props}/>;
                break;
            default:
                icon = <FontAwesome {...props}/>;
        }

        return icon;
    }
}
