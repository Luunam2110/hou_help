export const CONTROL_LOCAL = {
    MOVE_ACTIONBUTTON:'LOCAL.CHANGE_SEGMENT_USER',
};

export const DEVICE = {
    CONNECTED_INTERNET:'CONNECTED_INTERNET',
};

export const SETTING = {
    UPDATE_SETTING:'UPDATE_SETTING'
};

export const USER_SCREEN_CONTROL = {
    VALUE_Y_SCROLL:'LOCAL.VALUE_Y_SCROLL',
    TAB_INDEX:'LOCAL.TAB_INDEX',
};

export const STRINGEE_SERVICE = {
    GET_DEPARTMENT:'STRINGEE_SERVICE.GET_DEPARTMENT',
    RESULT_DEPARTMENT:'STRINGEE_SERVICE.RESULT_DEPARTMENT',
    GET_UPDATE_TOKEN:'STRINGEE_SERVICE.GET_UPDATE_TOKEN',
    RESULT_UPDATE_TOKEN:'STRINGEE_SERVICE.RESULT_UPDATE_TOKEN',
};

export const USER = {
    LOGIN : "USER.LOGIN",
    LOGOUT: "USER.LOGOUT",
    GET_CURRENT_USER_IN_DB: "USER.GET_CURRENT_USER_IN_DB",
    CHECK_ACCESS_TOKEN_IS_ACTIVE: "USER.CHECK_ACCESS_TOKEN_IS_ACTIVE",
    REMOVE_ERROR: "USER.REMOVE_ERROR",
    UPDATE_AVATAR: "USER.UPDATE_AVATAR",
};

export const STUDENT = {
    FECTH_STUDENT_INFOR:"STUDENT.FECTH_STUDENT_INFOR",
    UPDATE_AVATAR: "STUDENT.UPDATE_AVATAR",
    UPLOAD_AVATAR: "STUDENT.UPLOAD_AVATAR",
    REMOVE_ERROR: "STUDENT.REMOVE_ERROR",
};
export const FORM_CONTROL ={
    EDIT_IMAGE:"EDIT_IMAGE",
    NEXT_STEP:"NEXT_STEP",
    PREVIOUS_STEP:"PREVIOUS_STEP"
};
export const STUDENT_PROFILE = {
    FECTH_STUDENT_PROFILE:"STUDENT_PROFILE.FECTH_STUDENT_PROFILE",

    FECTH_STUDENT_SCHEDULE:"STUDENT_PROFILE.FECTH_STUDENT_SCHEDULE",
    FECTH_STUDENT_SCHEDULE_SUCCESS:"STUDENT_PROFILE.FECTH_STUDENT_SCHEDULE_SUCCESS",
    FECTH_STUDENT_RESULT:"STUDENT_PROFILE.FECTH_STUDENT_SCHEDULE",
    FECTH_STUDENT_RESULT_SUCCESS:"STUDENT_PROFILE.FECTH_STUDENT_RESULT_SUCCESS",
    FECTH_STUDENT_TUITION:"STUDENT_PROFILE.FECTH_STUDENT_TUITION",
    FECTH_STUDENT_TUITION_SUCCESS:"STUDENT_PROFILE.FECTH_STUDENT_TUITION_SUCCESS",
};

export const EMPLOYEE_PROFILE = {
    FECTH_EMPLOYEE_PROFILE:"EMPLOYEE_PROFILE.FECTH_EMPLOYEE_PROFILE",
};

export const FEEDBACK = {
    SEND_FEEDBACK: "FEEDBACK.SEND_FEEDBACK",
    STATUS_FEEDBACK: "FEEDBACK.STATUS_FEEDBACK",
}

export const SAGA = {
    ///////////////////////////////////////////////////////
    //User login
    USER_LOGIN_SUCCESS : "SAGA.USER_LOGIN_SUCCESS",
    USER_LOGIN_FAILED : "SAGA.USER_LOGIN_FAILED",

    GET_CURRENT_USER_IN_DB_SUCCESS : "SAGA.GET_CURRENT_USER_IN_DB_SUCCESS",
    GET_CURRENT_USER_IN_DB_FAILED : "SAGA.GET_CURRENT_USER_IN_DB_FAILED",

    CHECK_ACCESS_TOKEN_IS_ACTIVE_SUCCESS: "SAGA.CHECK_ACCESS_TOKEN_IS_ACTIVE_SUCCESS",
    CHECK_ACCESS_TOKEN_IS_ACTIVE_FAILED: "SAGA.CHECK_ACCESS_TOKEN_IS_ACTIVE",

    ///////////////////////////////////////////////////////
    //User Logout
    USER_LOGOUT: "SAGA.USERLOGOUT",
    USER_LOGOUT_SUCCESS: "SAGA.USER_LOGOUT_SUCCESS",
    USER_LOGOUT_FAILED: "SAGA.USER_LOGOUT_FAILED",

    ///////////////////////////////////////////////////////
    //Student

    FECTH_STUDENT_INFOR_SUCCESS:"SAGA.FECTH_STUDENT_INFOR_SUCCESS",
    FECTH_STUDENT_INFOR_FAILED:"SAGA.FECTH_STUDENT_INFOR_FAILED",

    ///////////////////////////////////////////////////////
    //Student profile

    FECTH_STUDENT_PROFILE_SUCCESS:"SAGA.FECTH_STUDENT_PROFILE_SUCCESS",
    FECTH_STUDENT_PROFILE_FAILED:"SAGA.FECTH_STUDENT_PROFILE_FAILED",

    ///////////////////////////////////////////////////////
    //Employee profile

    FECTH_EMPLOYEE_PROFILE_SUCCESS:"SAGA.FECTH_EMPLOYEE_PROFILE_SUCCESS",
    FECTH_EMPLOYEE_PROFILE_FAILED:"SAGA.FECTH_EMPLOYEE_PROFILE_FAILED",

};