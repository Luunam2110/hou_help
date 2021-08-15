import {DEVICE} from '../constant';
import {createReducer} from '../../Component/Create-reducer/create-reducer';


const initialState = {
    connected_internet:false,
};

const actionHander = {
    [DEVICE.CONNECTED_INTERNET]: (state = initialState, action) => {
        return {
            ...state,
            connected_internet: action.connected_internet
        };
    }
};

export default createReducer(initialState, actionHander);
