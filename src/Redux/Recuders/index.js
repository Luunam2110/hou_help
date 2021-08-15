import {combineReducers} from 'redux';

import userReducer from './User';
import studentReducer from './Student';
import studentProfileReducer from './StudentsProfile';
// import employeeProfileReducer from './EmplyeeProfile';
// import feedbackReducer from './Feedback';
// import control_local from './control_local';
// import news from './news';
// import user_screen_control from './userScreenControl';
import device from './device';
import FormReducer from "./FormControl";
// import setting_control from './Setting_control';
// import stringeeReducer from './stringee';

export default combineReducers({
    userReducer,
    studentReducer,
    studentProfileReducer,
    // feedbackReducer,
    // control_local,
    // news,
    // user_screen_control,
    device,
    FormReducer
    // setting_control,
    // stringeeReducer,
    // employeeProfileReducer
});
